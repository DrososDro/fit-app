build:
	docker compose -f local.yml up --build -d --remove-orphans

up:
	docker compose -f local.yml up -d

down:
	docker compose -f local.yml down

down-v:
	docker compose -f local.yml down -v

show-logs:
	docker compose -f local.yml logs
#
makemigrations:
	docker-compose -f local.yml run --rm fit_api python manage.py makemigrations

migrate:
	docker-compose -f local.yml run --rm fit_api python manage.py migrate

# pytest:
# 	docker-compose -f local.yml run --rm fit_api pytest
config:
	docker-compose -f local.yml config

create-superuser:
	docker-compose -f local.yml run --rm fit_api python manage.py createsuperuser

# incpect_db:
# 	docker-compose -f local.yml exec fit_postgres_db psql --username=xaosmaker --dbname=fitapp
#
api-shell:
	docker exec -it fit_api /bin/sh
