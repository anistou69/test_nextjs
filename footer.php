<footer class="bg-bilanis-darkBlue text-white py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <?php if(has_custom_logo()): ?>
                        <?php the_custom_logo(); ?>
                    <?php else: ?>
                        <h3 class="text-xl font-bold"><?php bloginfo('name'); ?></h3>
                    <?php endif; ?>
                    <p class="mt-4 text-gray-300">
                        Solutions professionnelles de nettoyage pour entreprises et particuliers
                    </p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container_class' => 'footer-menu',
                        'menu_class' => 'space-y-2'
                    ));
                    ?>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <?php if(get_theme_mod('bilanis_phone')): ?>
                        <p class="mb-2"><?php echo get_theme_mod('bilanis_phone'); ?></p>
                    <?php endif; ?>
                    <?php if(get_theme_mod('bilanis_email')): ?>
                        <p class="mb-2"><?php echo get_theme_mod('bilanis_email'); ?></p>
                    <?php endif; ?>
                    <?php if(get_theme_mod('bilanis_address')): ?>
                        <p><?php echo get_theme_mod('bilanis_address'); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>