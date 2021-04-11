# 小demo汇总
## 1. dir: imgUploadServer 图片上传服务器
  1. 实现接口
        1. 上传图片 post /upload
        2. 查询图片 get /queryImg
        3. 查询单张图片 get /queryImg?id=
  2. #### 在imgUploadServer目录创建 .env 文件 
        1. 下面是例子 
        ```javascript
          port=8081  
          host=localhost
          mysql_port=3306
          user=test
          password=test
          database=demo
          table=img_upload
  3. #### 项目运行
     ```javascript
     // cd imgUploadServer 
        npm install
        npm start
```sql
    --- 创建表
    CREATE TABLE `img_upload` (
        `id` int(10) UNSIGNED NOT NULL,
        `img_url` varchar(500) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
   5. ##### 下面是用postmon 测试接口截图 上传图片是字段名是 file
   成功运行截图
![image](https://github.com/baldAndStupid/totalDemo/blob/main/img/Snipaste_2021-04-11_15-39-44.png)
##### -----------------------------------------
![image](https://github.com/baldAndStupid/totalDemo/blob/main/img/Snipaste_2021-04-11_15-11-30.png)
##### -----------------------------------------
![image](https://github.com/baldAndStupid/totalDemo/blob/main/img/Snipaste_2021-04-11_15-11-54.png)
##### -----------------------------------------
![image](https://github.com/baldAndStupid/totalDemo/blob/main/img/Snipaste_2021-04-11_15-12-10.png)