-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 juin 2024 à 14:24
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `betting_sport`
--

-- --------------------------------------------------------

--
-- Structure de la table `money`
--

DROP TABLE IF EXISTS `money`;
CREATE TABLE IF NOT EXISTS `money` (
  `id` int NOT NULL AUTO_INCREMENT,
  `civility` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `money` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf16;

--
-- Déchargement des données de la table `money`
--

INSERT INTO `money` (`id`, `civility`, `firstName`, `lastName`, `email`, `money`, `createdAt`, `updatedAt`) VALUES
(16, 'Madame', 'Mathox', 'Bousigniere', 'mbousigniere@gmail.com', 0, '2023-11-12 21:31:45', '2023-11-12 21:31:45'),
(24, 'Monsieur', 'Mathox', 'mathox', 'cetras.contact@gmail.com', 0, '2024-06-03 13:34:08', '2024-06-03 13:34:08');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `civility` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `birthdate` datetime NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `zipcode` int NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf16;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `civility`, `firstName`, `lastName`, `birthdate`, `country`, `city`, `adress`, `zipcode`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
(56, 'Madame', 'Mathox', 'Bousigniere', '2023-11-15 00:00:00', 'Allemagne', 'Paris', '39 rue ', 75017, '$2a$10$uKWNcPsgAuQjJLXsnezLlOXXmeaHNsBiC22oSbt9H6lK1USMug9jK', 'mbousigniere@gmail.com', '2023-11-12 21:31:45', '2023-11-12 21:31:45'),
(58, 'Monsieur', 'Matheo', 'Rumani', '2001-09-27 00:00:00', 'France', 'Paris', '9 rue des potiers', 75009, '$2a$10$MNcvWJUqmp.keXEpUrGiAe.6PuYVV0Rwhx1iUmgGZ53nIR5piwzbq', 'mabousigniere@gmail.com', '2024-06-03 13:02:16', '2024-06-03 13:02:16'),
(63, 'Monsieur', 'Matheo', 'Rumani', '2001-09-27 00:00:00', 'France', 'Paris', '9 rue des potiers', 75009, '$2a$10$YgN8kZX5pMRpUAqndJJqDuW7VcOpu6wRTAA7qADTKV4mjwPdH50sa', 'mabousigniere@gmail.com', '2024-06-03 13:03:47', '2024-06-03 13:03:47'),
(64, 'Monsieur', 'Mathox', 'mathox', '1999-03-02 00:00:00', 'France', 'Noisy-le-Sec', '9 rue des potiers', 75009, '$2a$10$S6MKr/Q1x0Tz.gRIbNTNmeaCVhriCWAKbGjDcr/WRNnQIhxy4RUF2', 'cetras.contact@gmail.com', '2024-06-03 13:34:08', '2024-06-03 13:34:08');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;