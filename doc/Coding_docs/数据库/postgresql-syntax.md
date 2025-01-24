# PostgreSQL 语法详解

## 目录
- [基本连接命令](#基本连接命令)
- [数据库操作](#数据库操作)
- [表操作](#表操作)
- [数据操作](#数据操作)
- [查询语法](#查询语法)
- [高级特性](#高级特性)

## 基本连接命令

### 连接到PostgreSQL服务器
```sql
psql -h 主机名 -p 端口 -U 用户名 -d 数据库名
```

常用参数说明：
- `-h`：指定服务器主机名（默认为localhost）
- `-p`：指定端口号（默认为5432）
- `-U`：指定用户名
- `-d`：指定数据库名
- `-W`：强制要求输入密码
- `-l`：列出所有可用数据库

### psql命令行常用命令
- `\q`：退出psql
- `\l`：列出所有数据库
- `\c 数据库名`：切换数据库
- `\d`：列出当前数据库中的所有表
- `\d 表名`：显示表结构
- `\du`：列出所有用户
- `\dx`：列出已安装的扩展
- `\timing`：显示命令执行时间
- `\e`：使用外部编辑器
- `\?`：显示psql命令帮助
- `\h SQL命令`：显示SQL命令的帮助信息

## 数据库操作

### 创建数据库
```sql
CREATE DATABASE 数据库名
    [ WITH ]
    [ OWNER = 用户名 ]
    [ TEMPLATE = 模板 ]
    [ ENCODING = 编码方式 ]
    [ LC_COLLATE = 排序规则 ]
    [ LC_CTYPE = 字符分类 ]
    [ TABLESPACE = 表空间名 ]
    [ CONNECTION LIMIT = 连接数 ];
```

### 修改数据库
```sql
ALTER DATABASE 数据库名 RENAME TO 新数据库名;
ALTER DATABASE 数据库名 OWNER TO 新用户名;
```

### 删除数据库
```sql
DROP DATABASE [ IF EXISTS ] 数据库名;
```

## 表操作

### 创建表
```sql
CREATE TABLE 表名 (
    列名1 数据类型1 [约束],
    列名2 数据类型2 [约束],
    ...
    [表级约束]
);
```

常用数据类型：
- 数值类型：
  - `INTEGER`/`INT`：4字节整数
  - `BIGINT`：8字节整数
  - `NUMERIC(精度,小数位)`：精确小数
  - `REAL`：6位十进制精度
  - `DOUBLE PRECISION`：15位十进制精度
- 字符类型：
  - `CHAR(n)`：定长字符串
  - `VARCHAR(n)`：变长字符串
  - `TEXT`：无限长度文本
- 日期时间类型：
  - `DATE`：日期
  - `TIME`：时间
  - `TIMESTAMP`：日期和时间
  - `INTERVAL`：时间间隔
- 布尔类型：
  - `BOOLEAN`：true/false
- 特殊类型：
  - `UUID`：通用唯一标识符
  - `JSON`/`JSONB`：JSON数据
  - `ARRAY`：数组
  - `XML`：XML数据

常用约束：
- `PRIMARY KEY`：主键
- `FOREIGN KEY`：外键
- `UNIQUE`：唯一
- `NOT NULL`：非空
- `CHECK`：检查约束
- `DEFAULT`：默认值

### 修改表
```sql
-- 添加列
ALTER TABLE 表名 ADD COLUMN 列名 数据类型 [约束];

-- 删除列
ALTER TABLE 表名 DROP COLUMN 列名;

-- 修改列类型
ALTER TABLE 表名 ALTER COLUMN 列名 TYPE 新数据类型;

-- 重命名列
ALTER TABLE 表名 RENAME COLUMN 列名 TO 新列名;

-- 添加约束
ALTER TABLE 表名 ADD CONSTRAINT 约束名 约束定义;

-- 删除约束
ALTER TABLE 表名 DROP CONSTRAINT 约束名;
```

### 删除表
```sql
DROP TABLE [ IF EXISTS ] 表名 [ CASCADE | RESTRICT ];
```

## 数据操作

### 插入数据
```sql
-- 单行插入
INSERT INTO 表名 (列1, 列2, ...) VALUES (值1, 值2, ...);

-- 多行插入
INSERT INTO 表名 (列1, 列2, ...) VALUES 
    (值1, 值2, ...),
    (值1, 值2, ...),
    ...;

-- 从其他表插入
INSERT INTO 表名 (列1, 列2, ...)
SELECT 列1, 列2, ... FROM 其他表 WHERE 条件;
```

### 更新数据
```sql
UPDATE 表名
SET 列1 = 值1,
    列2 = 值2,
    ...
WHERE 条件;
```

### 删除数据
```sql
-- 删除满足条件的行
DELETE FROM 表名 WHERE 条件;

-- 删除所有行
DELETE FROM 表名;
-- 或
TRUNCATE TABLE 表名;
```

## 查询语法

### 基本SELECT语句
```sql
SELECT [DISTINCT] 列1 [AS 别名1], 列2 [AS 别名2], ...
FROM 表名 [AS 别名]
[WHERE 条件]
[GROUP BY 分组列]
[HAVING 分组条件]
[ORDER BY 排序列 [ASC | DESC]]
[LIMIT 限制行数] [OFFSET 偏移行数];
```

### WHERE子句条件操作符
- 比较操作符：`=`, `<>`, `!=`, `<`, `>`, `<=`, `>=`
- 范围：`BETWEEN ... AND ...`
- 列表：`IN (...)`, `NOT IN (...)`
- 模式匹配：`LIKE`, `ILIKE`, `SIMILAR TO`
- 空值：`IS NULL`, `IS NOT NULL`
- 逻辑操作符：`AND`, `OR`, `NOT`

### JOIN连接查询
```sql
-- 内连接
SELECT * FROM 表1
INNER JOIN 表2 ON 连接条件;

-- 左外连接
SELECT * FROM 表1
LEFT [OUTER] JOIN 表2 ON 连接条件;

-- 右外连接
SELECT * FROM 表1
RIGHT [OUTER] JOIN 表2 ON 连接条件;

-- 全外连接
SELECT * FROM 表1
FULL [OUTER] JOIN 表2 ON 连接条件;

-- 交叉连接
SELECT * FROM 表1
CROSS JOIN 表2;
```

### 子查询
```sql
-- WHERE子句中的子查询
SELECT * FROM 表1
WHERE 列 操作符 (SELECT ... FROM 表2 ...);

-- FROM子句中的子查询
SELECT * FROM (SELECT ... FROM 表) AS 别名;

-- 相关子查询
SELECT * FROM 表1 t1
WHERE EXISTS (SELECT 1 FROM 表2 t2 WHERE t2.列 = t1.列);
```

### 常用聚合函数
- `COUNT(*)`：计数
- `SUM(列)`：求和
- `AVG(列)`：平均值
- `MAX(列)`：最大值
- `MIN(列)`：最小值
- `STRING_AGG(列, 分隔符)`：字符串聚合
- `ARRAY_AGG(列)`：数组聚合
- `JSON_AGG(列)`：JSON聚合

## 高级特性

### 窗口函数
```sql
SELECT 列,
       窗口函数 OVER (
           [PARTITION BY 分组列]
           [ORDER BY 排序列]
           [FRAME 子句]
       )
FROM 表名;
```

常用窗口函数：
- `ROW_NUMBER()`：行号
- `RANK()`：排名（相同值相同排名，跳过下一个排名）
- `DENSE_RANK()`：排名（相同值相同排名，不跳过下一个排名）
- `LAG(列, 偏移)`：取前面的值
- `LEAD(列, 偏移)`：取后面的值
- `FIRST_VALUE(列)`：分组内第一个值
- `LAST_VALUE(列)`：分组内最后一个值

### 公共表表达式（CTE）
```sql
WITH cte名称 AS (
    SELECT ...
    FROM ...
    WHERE ...
)
SELECT * FROM cte名称;
```

### 视图
```sql
-- 创建视图
CREATE [OR REPLACE] VIEW 视图名 AS
SELECT ...
FROM ...
WHERE ...;

-- 创建物化视图
CREATE MATERIALIZED VIEW 视图名 AS
SELECT ...
FROM ...
WHERE ...;

-- 刷新物化视图
REFRESH MATERIALIZED VIEW 视图名;
```

### 索引
```sql
-- 创建索引
CREATE INDEX 索引名 ON 表名 (列名);

-- 创建唯一索引
CREATE UNIQUE INDEX 索引名 ON 表名 (列名);

-- 创建部分索引
CREATE INDEX 索引名 ON 表名 (列名) WHERE 条件;

-- 创建表达式索引
CREATE INDEX 索引名 ON 表名 ((表达式));

-- 创建多列索引
CREATE INDEX 索引名 ON 表名 (列1, 列2);
```

### 事务控制
```sql
-- 开始事务
BEGIN;
-- 或
START TRANSACTION;

-- 提交事务
COMMIT;

-- 回滚事务
ROLLBACK;

-- 设置保存点
SAVEPOINT 保存点名称;

-- 回滚到保存点
ROLLBACK TO SAVEPOINT 保存点名称;
```

### 用户和权限管理
```sql
-- 创建用户
CREATE USER 用户名 WITH PASSWORD '密码';

-- 修改用户属性
ALTER USER 用户名 WITH PASSWORD '新密码';

-- 删除用户
DROP USER 用户名;

-- 授予权限
GRANT 权限 ON 对象 TO 用户名;

-- 收回权限
REVOKE 权限 ON 对象 FROM 用户名;
```

权限类型：
- `SELECT`：查询权限
- `INSERT`：插入权限
- `UPDATE`：更新权限
- `DELETE`：删除权限
- `TRUNCATE`：截断表权限
- `REFERENCES`：引用权限
- `TRIGGER`：触发器权限
- `CREATE`：创建权限
- `CONNECT`：连接权限
- `TEMPORARY`：临时表权限
- `EXECUTE`：执行权限
- `USAGE`：使用权限
- `ALL PRIVILEGES`：所有权限

### 备份和恢复
```bash
# 备份数据库
pg_dump -h 主机名 -p 端口 -U 用户名 -F 格式 -f 文件名 数据库名

# 备份所有数据库
pg_dumpall -h 主机名 -p 端口 -U 用户名 -f 文件名

# 恢复数据库
psql -h 主机名 -p 端口 -U 用户名 -d 数据库名 -f 备份文件

# 从自定义格式恢复
pg_restore -h 主机名 -p 端口 -U 用户名 -d 数据库名 备份文件
```

备份格式选项：
- `-F p`：纯文本格式（默认）
- `-F c`：自定义格式
- `-F d`：目录格式
- `-F t`：tar格式

这个文档涵盖了PostgreSQL的主要语法和功能，您可以根据需要进一步扩展和定制内容。建议在发布到博客之前，针对特定版本的PostgreSQL进行验证，并补充具体的使用示例和最佳实践建议。