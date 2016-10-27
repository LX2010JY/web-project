<?php
/**
  *上传图片的位置一定要可写入才行，对于linux服务器，没有权限写入将会上传失败
**/
  $name = $_FILES['upload_file']['name'];
  $data = array(
    'success' => true,
    'msg'=>'success',
    'file_path'=>'./upload/'.$name
  );
  if(move_uploaded_file($_FILES['upload_file']['tmp_name'],dirname(__FILE__).'/upload/'.$name)){
    $data['success'] = true;
  } else {
    $data['success'] = false;
  }
  exit(json_encode($data));
?>
