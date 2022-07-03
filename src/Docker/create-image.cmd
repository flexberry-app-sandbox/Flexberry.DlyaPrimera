docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dlya_primera/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dlya_primera/app ../..
