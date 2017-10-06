CREATE TABLE IF NOT EXISTS `mailing` (
  `id` varchar(50) NOT NULL,
  `email` varchar(500) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `last_login` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `mailing` (`id`, `email`, `status`, `last_login`) VALUES
('1', 'delfrinando@gmail.com', 'active', '2017-10-02 00:00:00'),
('2', 'delfrinando@rocketmail.com', 'notresponsive', '2017-10-01 00:00:00'),
('3', 'delfrinando@yahoo.co.id', 'inactive', '2017-10-05 00:00:00');
