-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2021 a las 21:08:41
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
  `data` json NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `delivery`
--

INSERT INTO `delivery` (`id`, `data`, `createdAt`, `updatedAt`) VALUES
(1, '{\"label\": {\"PDF\": null, \"PNG\": null, \"ZPL\": null}, \"links\": [{\"rel\": \"self\", \"href\": \"https://stage.api.enviame.io/api/s2/v2/deliveries/1569769\"}, {\"rel\": \"tracking\", \"href\": \"https://stage.api.enviame.io/api/s2/v2/deliveries/1569769/tracking\"}, {\"rel\": \"tracking-web\", \"href\": \"https://stage.api.enviame.io/s2/companies/401/deliveries/1569769/tracking\"}], \"status\": {\"id\": 5, \"code\": \"CREATED\", \"info\": \"Ya creamos tu envío en: BLUEXPRESS  - \", \"name\": \"Listo para despacho\", \"created_at\": \"2021-05-17 15:02:20\"}, \"carrier\": \"BLUEXPRESS\", \"country\": \"CL\", \"service\": \"priority\", \"barcodes\": null, \"customer\": {\"email\": \"mgggg@outlook.com\", \"phone\": \"977623070\", \"full_name\": \"Marcela Gonzalez Arias\"}, \"created_at\": \"2021-05-17 15:02:16\", \"identifier\": 1569769, \"updated_at\": \"2021-05-17 15:02:20\", \"deadline_at\": \"No informada.\", \"imported_id\": \"201569769\", \"tracking_number\": \"12121\", \"shipping_address\": {\"type\": \"home\", \"place\": \"Puente Alto\", \"full_address\": \"Teofilo Belmar 6552, Puente Alto\"}}', '2021-05-17 19:06:14', '2021-05-17 19:06:14');

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
(3, 3, 'John', 'Carter', 3431, NULL, NULL),
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
(13, 'Keebler and Sons', 'Sawayn, Harris and Metz Inc', '28231097k', '2389 Neha Wall function () {\n    return faker.random.arrayElement(faker.definitions.address.street_prefix);\n  }', 1, '2021-05-16 18:27:44', '2021-05-16 18:27:44'),
(14, 'Rohan, Kertzmann and Rutherford', 'Lakin - Lind and Sons', '750212654', '025 Wilhelm Via function () {\n    return faker.random.arrayElement(faker.definitions.address.street_prefix);\n  }', 1, '2021-05-16 18:27:44', '2021-05-16 18:27:44'),
(15, 'Lynch - Tillman', 'Hirthe and Sons Group', '250194366', '309 Schulist Green', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(16, 'Muller, Corwin and Kub', 'Streich LLC and Sons', '754313005', '4634 Ezequiel Lake', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(17, 'Trantow - Jast', 'Reynolds - Heidenreich and Sons', '637656341', '7390 Pagac Stravenue', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(18, 'Carter - Boyer', 'Ullrich Inc Group', '943629099', '6974 Hamill Cape', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(19, 'Dach, Monahan and Gibson', 'Friesen LLC Group', '26433375k', '811 Macie Shores', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(20, 'Parisian - Murray', 'Monahan, Romaguera and Lesch LLC', '749344105', '40906 Koss Union', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(21, 'Brakus - Herzog', 'Hegmann - Emmerich Inc', '538954144', '961 Jalen Glens', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(22, 'Macejkovic, Boyer and Mante', 'Smitham Inc LLC', '628271003', '271 Grayce Views', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(23, 'Botsford, Heidenreich and Zulauf', 'Hettinger Inc Inc', '263166396', '564 Mills Drives', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(24, 'Wehner - Koss', 'Kessler Group LLC', '816152674', '1907 Ullrich Union', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(25, 'Sanford, Yundt and Schiller', 'Schmeler Group Inc', '148235368', '68299 Bailey Knoll', 1, '2021-05-16 18:44:51', '2021-05-16 18:44:51'),
(26, 'Armstrong, Stoltenberg and Dickens', 'Connelly Group LLC', '671005767', '282 Narciso Square', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(27, 'Ebert - Klocko', 'Bernhard Group Inc', '945486414', '453 Kiehn Fork', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(28, 'Blanda and Sons', 'Greenholt - Hartmann and Sons', '22220559k', '5001 Anjali Gardens', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(29, 'Lowe, Gusikowski and Connelly', 'Reichert Group Inc', '711663045', '787 Kuhlman Radial', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(30, 'Torp, Schultz and Klein', 'Lowe Inc Inc', '300681697', '5540 Jimmie Inlet', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(31, 'Kertzmann LLC', 'Haag Inc and Sons', '641210161', '510 Prosacco Way', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(32, 'Goyette - Marquardt', 'Morissette Inc Group', '451846604', '887 Cortney Green', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(33, 'Smitham - Waters', 'Powlowski, Spencer and Cole and Sons', '18987376k', '9779 Cicero Hills', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(34, 'Koelpin - Hodkiewicz', 'Leannon, Wilderman and Morissette Inc', '932274639', '59037 Lockman Well', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(35, 'Donnelly, Turner and Kihn', 'Kiehn LLC Group', '65678332k', '2797 Corkery Harbors', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(36, 'Cassin - Yundt', 'Howell - Kuhn and Sons', '47950461k', '9248 Saige Corner', 1, '2021-05-16 18:48:03', '2021-05-16 18:48:03'),
(39, 'PUNTO TICKET', 'PUNTO TICKET S.A', '175971750', 'Alonso de Córdova 5320, Las Condes, Región Metropolitana', 1, '2021-05-16 19:00:20', '2021-05-16 19:00:20'),
(41, 'Bosco, White and Runolfsdottir', 'Bogan Inc LLC', '151885195', '989 Bins Freeway', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(42, 'Weissnat Group', 'Halvorson, Senger and Vandervort LLC', '849425250', '01340 Volkman Terrace', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(43, 'Wolf, Schumm and Ruecker', 'Lang - Brekke and Sons', '420688741', '9223 Shanie Stravenue', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(44, 'Cremin, Runolfsdottir and Hartmann', 'Little Inc and Sons', '681541373', '513 Clyde Pines', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(45, 'Marquardt, Goodwin and Rosenbaum', 'Rosenbaum, Maggio and Quitzon Group', '570378759', '78233 Parisian Knolls', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(46, 'Mills LLC', 'Barton - Beahan Group', '743412141', '2369 Loraine Plain', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(47, 'Okuneva - Rohan', 'Klein, Homenick and Hessel LLC', '618799409', '086 Everett Corner', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(48, 'Murphy LLC', 'Carroll Inc and Sons', '232014172', '253 Schultz Falls', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(49, 'Stamm Inc', 'Walker - Gerlach Inc', '295654570', '9964 Rickey Via', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(50, 'Streich Group', 'Corkery - Crist LLC', '566003112', '0909 Zemlak Highway', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51'),
(51, 'Little - Altenwerth', 'Adams, Beatty and Koepp LLC', '960616863', '3183 Ella Roads', 1, '2021-05-16 19:41:51', '2021-05-16 19:41:51');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
