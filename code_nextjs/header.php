<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('font-open-sans'); ?>>
    <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center">
                    <?php 
                    if(has_custom_logo()):
                        the_custom_logo();
                    else:
                    ?>
                        <a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
                    <?php endif; ?>
                </div>
                
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container_class' => 'hidden md:flex space-x-8',
                    'menu_class' => 'flex space-x-8',
                    'link_class' => 'text-bilanis-blue hover:text-bilanis-green font-montserrat font-semibold'
                ));
                ?>
            </div>
        </div>
    </nav>