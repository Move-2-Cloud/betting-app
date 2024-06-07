--
-- Structure de la table "money"
--

DROP TABLE IF EXISTS "money";
CREATE TABLE IF NOT EXISTS "money" (
  id SERIAL PRIMARY KEY,
  "civility" varchar(255) NOT NULL,
  "firstName" varchar(255) NOT NULL,
  "lastName" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "money" float DEFAULT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

--
-- Déchargement des données de la table "money"
--

INSERT INTO "money" ("civility", "firstName", "lastName", "email", "money", "createdAt", "updatedAt") VALUES
('Madame', 'Mathox', 'Bousigniere', 'mbousigniere@gmail.com', 0, '2023-11-12 21:31:45', '2023-11-12 21:31:45'),
('Monsieur', 'Mathox', 'mathox', 'cetras.contact@gmail.com', 0, '2024-06-03 13:34:08', '2024-06-03 13:34:08');

--
-- Structure de la table "users"
--

DROP TABLE IF EXISTS "users";
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "civility" varchar(255) NOT NULL,
  "firstName" varchar(255) NOT NULL,
  "lastName" varchar(255) NOT NULL,
  "birthdate" date NOT NULL,
  "country" varchar(255) NOT NULL,
  "city" varchar(255) NOT NULL,
  "address" varchar(255) NOT NULL,
  "zipcode" varchar(10) NOT NULL,
  "password" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
);

--
-- Déchargement des données de la table "users"
--

INSERT INTO "users" ("civility", "firstName", "lastName", "birthdate", "country", "city", "address", "zipcode", "password", "email", "createdAt", "updatedAt") VALUES
('Madame', 'Mathox', 'Bousigniere', '2023-11-15', 'Allemagne', 'Paris', '39 rue', '75017', '$2a$10$uKWNcPsgAuQjJLXsnezLlOXXmeaHNsBiC22oSbt9H6lK1USMug9jK', 'mbousigniere@gmail.com', '2023-11-12 21:31:45', '2023-11-12 21:31:45'),
('Monsieur', 'Matheo', 'Rumani', '2001-09-27', 'France', 'Paris', '9 rue des potiers', '75009', '$2a$10$MNcvWJUqmp.keXEpUrGiAe.6PuYVV0Rwhx1iUmgGZ53nIR5piwzbq', 'mabousigniere@gmail.com', '2024-06-03 13:02:16', '2024-06-03 13:02:16'),
('Monsieur', 'Matheo', 'Rumani', '2001-09-27', 'France', 'Paris', '9 rue des potiers', '75009', '$2a$10$YgN8kZX5pMRpUAqndJJqDuW7VcOpu6wRTAA7qADTKV4mjwPdH50sa', 'mabousigniere@gmail.com', '2024-06-03 13:03:47', '2024-06-03 13:03:47'),
('Monsieur', 'Mathox', 'mathox', '1999-03-02', 'France', 'Noisy-le-Sec', '9 rue des potiers', '75009', '$2a$10$S6MKr/Q1x0Tz.gRIbNTNmeaCVhriCWAKbGjDcr/WRNnQIhxy4RUF2', 'cetras.contact@gmail.com', '2024-06-03 13:34:08', '2024-06-03 13:34:08');