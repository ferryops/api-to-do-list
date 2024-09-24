-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2024 at 11:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `to_do_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `checklists`
--

CREATE TABLE `checklists` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checklists`
--

INSERT INTO `checklists` (`id`, `user_id`, `title`, `description`, `created_at`) VALUES
(1, 1, 'checklist 1', 'desc', '2024-09-24 16:56:42'),
(2, 1, 'checklist 2', 'desc', '2024-09-24 16:56:53');

-- --------------------------------------------------------

--
-- Table structure for table `item_status_history`
--

CREATE TABLE `item_status_history` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `todo_items`
--

CREATE TABLE `todo_items` (
  `id` int(11) NOT NULL,
  `checklist_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `due_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todo_items`
--

INSERT INTO `todo_items` (`id`, `checklist_id`, `title`, `description`, `status`, `due_date`, `created_at`) VALUES
(1, 1, 'item checklist 1', 'desc', 'pending', NULL, '2024-09-24 17:31:33'),
(2, 1, 'item checklist 2', 'desc', 'pending', NULL, '2024-09-24 17:31:52'),
(3, 1, 'item checklist 3', 'desc', 'pending', NULL, '2024-09-24 17:31:56'),
(4, 1, 'item checklist 4', 'desc', 'pending', NULL, '2024-09-24 17:33:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(1, 'user-1', '$2b$10$onnH5aTZ8DprAUtZzL87AOF5nfrCmzf9n/bXHELMY2u5LLd2rRBdW', 'user1@gmail.com', '2024-09-24 16:21:32'),
(2, 'user-2', '$2b$10$jUkuJpzD1TOc/nrmmBschu1hJbvKDjdSDGrQEU0kqdDu.zH/upJcK', 'user2@gmail.com', '2024-09-24 16:25:03'),
(8, 'user-3', '$2b$10$QAtdik62WnWTntuoTeX7Mup3iLWjzbWCU9VUTfGoTlBTkwMRrIFji', 'user3@gmail.com', '2024-09-24 16:32:23'),
(10, 'user-4', '$2b$10$rSdK0MtoffxmeIWGAxcLY.AcpNPRcayTe6IROBNWzNlwpbOTySi0.', 'user4@gmail.com', '2024-09-24 16:47:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checklists`
--
ALTER TABLE `checklists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `item_status_history`
--
ALTER TABLE `item_status_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `todo_items`
--
ALTER TABLE `todo_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `checklist_id` (`checklist_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checklists`
--
ALTER TABLE `checklists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `item_status_history`
--
ALTER TABLE `item_status_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `todo_items`
--
ALTER TABLE `todo_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checklists`
--
ALTER TABLE `checklists`
  ADD CONSTRAINT `checklists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `item_status_history`
--
ALTER TABLE `item_status_history`
  ADD CONSTRAINT `item_status_history_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `todo_items` (`id`);

--
-- Constraints for table `todo_items`
--
ALTER TABLE `todo_items`
  ADD CONSTRAINT `todo_items_ibfk_1` FOREIGN KEY (`checklist_id`) REFERENCES `checklists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
