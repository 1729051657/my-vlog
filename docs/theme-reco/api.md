---
title: 安卓存储文件后上传失败
date: 2020-05-29
tags:
- Android 
categories:
- Android
---

## 话不多说先看代码
```angular2html
/**
 * 打开摄像头，获取视频流
 * @param cameraId: 摄像头id,0:后置摄像头,1:前置摄像头
 * @param callback 执行结果回调 (会回调多次)
 */
@UniJSMethod(uiThread = false)
public void openCameraByID(String cameraId,final JSCallback  callback) {
    mContext = mWXSDKInstance.getContext();
    isPreview=true;
    esLivingDetectionManager = EsLivingDetectionManager.getInstance(mContext);
    esLivingDetectionManager.startLivingDetect(cameraId,new EsLivingDetectCallback() {
        @Override
        public void onFinish(EsLivingDetectResult result) {
            callback.invoke(result);
        }

        @Override
        public void onImageAvailable(Bitmap bitmap) {
            if (bitmap != null&&isPreview) {
                FaceModel faceModel = ReadFaceWXModule.faceModel;
                FaceResult faceResult = faceModel.analyse(bitmap.getWidth(), bitmap.getHeight(), bitmap);
                if (faceResult.getPersonId()>-1){
                    cameraHelper.stop();
                    cameraHelper.release();
                    mContext = mWXSDKInstance.getContext();
                    Mainactivity = (Activity)mWXSDKInstance.getContext();
                    userRepository = new UserRepository(Mainactivity.getApplication());
                    User user = userRepository.getUserById(faceResult.getPersonId() + "");
                    JSONObject json =new JSONObject();
                    //此处有问题
                    json.put("payFace", saveBitmap(compressImage(matrixImage(bitmap)),DemoConfig.RsPictureRecognitionPath,faceResult.getPersonId()+""));
                    json.put("personId",faceResult.getPersonId());
                    json.put("user",user);
                    json.put("msg","识别成功");
                    isPreview=false;
                    esLivingDetectionManager.cancel();
                    callback.invoke(json);
                }else{
                    esLivingDetectionManager.setProcessAndMsg(40, faceResult.getMsg());
                }
            }

        }
    });
}
```
## 保存图片方法
```angular2html
 /**
 * 保存bitmap到本地
 *
 * @param bitmap 目标图像对象
 * @param path 目标本地路径
 * @return 目标文件本地路径
 */
public static String  saveBitmap(Bitmap bitmap, String path, String name) {
    String filePath = "";
    //
    try {
        String fileName = TextUtils.isEmpty(name) ?  "" : name;
        File filePic = new File(path, fileName + ".png");
        // 问题就在这 当重名图片 重新 创建文件 会导致无法上传此文件到服务器 
        // 虽然有这张图并且表面正常 但是拿这张图 上传服务器会报错 
        // 所以必须先删除文件再进行上传
        //filePic.delete(); 
        FileOutputStream fos = new FileOutputStream(filePic);
        bitmap.compress(Bitmap.CompressFormat.PNG, 80, fos);
        fos.flush();
        fos.close();
        //
        filePath = filePic.getAbsolutePath();
    } catch (IOException e) {
        Log.e(TAG, "Hit IOException when call BitmapUtil :-> saveBitmap", e);
    }
    return filePath;
}
```
## 踩坑踩的，这谁能想到一整正常的图片一直上传失败，展示没有任何问题 唯独上传失败以为是上传接口写的有问题实际上并不是
