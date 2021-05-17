-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2021 a las 23:42:54
-- Versión del servidor: 8.0.17
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `enviametest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `continents`
--

CREATE TABLE `continents` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) NOT NULL,
  `anual_adjustment` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `continents`
--

INSERT INTO `continents` (`id`, `name`, `anual_adjustment`) VALUES
(1, 'América', 4),
(2, 'Europa', 5),
(3, 'Asia', 6),
(4, 'Oceanía', 6),
(5, 'Africa', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` int(10) UNSIGNED NOT NULL,
  `continent_id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `continent_id`, `name`) VALUES
(1, 1, 'Chile'),
(2, 1, 'Argentina'),
(3, 1, 'Canadá'),
(4, 1, 'Colombia'),
(5, 2, 'Alemania'),
(6, 2, 'Francia'),
(7, 2, 'España'),
(8, 2, 'Grecia'),
(9, 3, 'India'),
(10, 3, 'Japón'),
(11, 3, 'Corea del Sur'),
(12, 4, 'Australia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `delivery`
--

CREATE TABLE `delivery` (
  `id` int(11) NOT NULL,
  `data` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(10) UNSIGNED NOT NULL,
  `country_id` int(11) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `salary` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `country_id`, `first_name`, `last_name`, `salary`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Pedro', 'Rojas', 2080, NULL, NULL),
(2, 2, 'Luciano', 'Alessandri', 2184, NULL, NULL),
(3, 3, 'John', 'Carter', 3172, NULL, NULL),
(4, 4, 'Alejandra', 'Benavides', 2236, NULL, NULL),
(5, 5, 'Moritz', 'Baring', 6000, NULL, NULL),
(6, 6, 'Thierry', 'Henry', 5900, NULL, NULL),
(7, 7, 'Sergio', 'Ramos', 6200, NULL, NULL),
(8, 8, 'Nikoleta', 'Kyriakopulu', 7000, NULL, NULL),
(9, 9, 'Aamir', 'Khan', 2120, NULL, NULL),
(10, 10, 'Takumi', 'Fujiwara', 5300, NULL, NULL),
(11, 11, 'Heung-min', 'Son', 5100, NULL, NULL),
(12, 12, 'Peter', 'Johnson', 6100, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nombreFantasia` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `razonSocial` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `rut` varchar(9) NOT NULL,
  `direccion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `estado` tinyint(1) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id`, `nombreFantasia`, `razonSocial`, `rut`, `direccion`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'DEMARKA', 'DEMARKA S .A', '861321002', 'Avenida Marathon 2707, Macul, Santiago', 1, '0000-00-00 00:00:00', '2021-05-16 14:39:05'),
(4, 'ActiveIt', 'ActiveIt SPA', '19', 'Huerfanos 835 Of. 401-402, Santiago', 0, NULL, '2021-05-16 16:07:21'),
(5, 'EDITRADE', 'GESTION Y TRANSMISION ELECTRONICA SOCIEDAD ANONIMA', '967117609', 'Matilde Salamanca 736 piso 2, Providencia, Santiago de Chile', 1, '2021-05-16 14:12:00', '2021-05-16 14:12:00'),
(8, 'Ormasoft', 'SERVICIOS COMPUTACIONALES YORKA ADMREA OVALLE  ROJA', '766597572', 'Simón Bolívar 1840 - Ñuñoa', 1, '2021-05-16 15:58:03', '2021-05-16 15:58:03'),
(9, 'TOTALPACK', 'COMERCIAL TOTALPACK LIMITADA', '79948840K', 'Calle San Ignacio de Loyola 1538, Santiago, Región Metropolitana', 1, '2021-05-16 16:00:40', '2021-05-16 16:00:40'),
(10, 'DSAC', 'DSAC CHILE SPA', '778574500', 'Av. Providencia 1208, Oficina 804, Providencia, Región Metropolitana', 1, '2021-05-16 16:01:38', '2021-05-16 16:01:38'),
(11, 'KIBERNUM', 'INGENIERIA INFORMATICA KIBERNUM S.A', '96616770K', 'San Antonio 580, Santiago, Región Metropolitana', 1, '2021-05-16 16:04:08', '2021-05-16 16:04:08'),
(12, 'PUNTO TICKET', 'PUNTO TICKET S.A', '765104203', 'Alonso de Córdova 5320, Las Condes, Región Metropolitana', 1, '2021-05-16 16:10:54', '2021-05-16 16:10:54'),


--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `continents`
--
ALTER TABLE `continents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rut` (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `continents`
--
ALTER TABLE `continents`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
