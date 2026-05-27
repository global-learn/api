.PHONY: dev docker-up db-migrate db-seed

dev: docker-up db-migrate db-seed

docker-up:
	docker compose -f docker-compose.yaml -f docker-compose.local.yaml up -d

db-migrate:
	@echo "Running DB migrations..."

db-seed:
	@echo "Seeding database..."
