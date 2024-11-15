<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mehtic_technology' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nhbqoK,Tcy<nwkzV@Y>+a,_L6qc&a9M&W86|Z&nKCJnF!1EbavlI-XJ!SisAzeZc' );
define( 'SECURE_AUTH_KEY',  'z?6`;SS?b![[3B/]c@8pamo0r8@[VeZ+MqrW9Hzddo8KJLQv;S:k2(d~f-74&;%/' );
define( 'LOGGED_IN_KEY',    'c-S`#0Rg|Qyb|+Na?,%N.y2xD{Kvy>liW&-(L^eI7Bo&+f/9YdaSzGOt#l[5&68I' );
define( 'NONCE_KEY',        'P2C&S|];Z+~$3&az[2iLm-V%E]^$8TbhKdxhTz*`>|sEpiV!}:g!Dba-Y%|9)]}G' );
define( 'AUTH_SALT',        '#iCtV[4S(UDipbpH4Ybi;?~I[rh|WIO,0xjq.6]>:Raa~>nWRMy~nBvg9V6Vr)*?' );
define( 'SECURE_AUTH_SALT', 'Jt@#=cg)_]a8^HYgKLiJy)E<]uI|-IN56~SXq q<S-7Eqs*wN3v_{ *{|b!^f]o[' );
define( 'LOGGED_IN_SALT',   '[JwAA74@IBF{CyZ|]cNX.7LfPUWFS~-Fi&Yn?7 FJR[ZnE;hVIf8XW$J6hib$U|W' );
define( 'NONCE_SALT',       'mQW(D,o5;fCB<-1vr%(g<*GX7)T4I21twrKdpZq`ry,4BOGtB}N!S*cpPdh QjKH' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
