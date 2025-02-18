<?php
function bilanis_setup() {
    // Support des images à la une
    add_theme_support('post-thumbnails');
    
    // Enregistrement des menus
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer' => 'Menu Pied de page'
    ));
    
    // Ajout des types de contenu personnalisés
    register_post_type('services', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true
    ));
    
    // Ajout des champs personnalisés (ACF)
    if(function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group(array(
            'key' => 'group_services',
            'title' => 'Détails du service',
            'fields' => array(
                array(
                    'key' => 'field_description_courte',
                    'label' => 'Description courte',
                    'name' => 'description_courte',
                    'type' => 'textarea'
                ),
                array(
                    'key' => 'field_image_service',
                    'label' => 'Image du service',
                    'name' => 'image_service',
                    'type' => 'image'
                )
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'services'
                    )
                )
            )
        ));
    }
}
add_action('after_setup_theme', 'bilanis_setup');

// Ajout des styles et scripts
function bilanis_scripts() {
    wp_enqueue_style('bilanis-style', get_stylesheet_uri());
    wp_enqueue_style('montserrat', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
    wp_enqueue_style('open-sans', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
}
add_action('wp_enqueue_scripts', 'bilanis_scripts');