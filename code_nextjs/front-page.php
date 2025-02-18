<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative h-screen">
        <?php 
        $hero_image = get_theme_mod('bilanis_hero_image', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        ?>
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('<?php echo esc_url($hero_image); ?>')">
            <div class="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4">
                <div class="max-w-3xl">
                    <h1 class="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6">
                        <?php echo get_theme_mod('bilanis_hero_title', 'SERVICE DE ROTATION DES CONTENEURS'); ?>
                    </h1>
                    <p class="text-xl text-white mb-8 opacity-90">
                        <?php echo get_theme_mod('bilanis_hero_subtitle', 'Optimisez votre gestion des déchets avec notre service professionnel de rotation des conteneurs.'); ?>
                    </p>
                    <div class="flex gap-4">
                        <a href="#devis" class="px-8 py-3 rounded-full font-semibold text-white bg-gradient-bilanis hover:opacity-90 transition-opacity duration-300">
                            DEMANDER UN DEVIS
                        </a>
                        <a href="#services" class="px-8 py-3 rounded-full font-semibold bg-white text-bilanis-blue hover:bg-white/90 transition-opacity duration-300">
                            EN SAVOIR PLUS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-bilanis-gray">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-bilanis-darkBlue mb-12">
                NOS SERVICES
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $services = new WP_Query(array(
                    'post_type' => 'services',
                    'posts_per_page' => 4
                ));
                
                if($services->have_posts()):
                    while($services->have_posts()): $services->the_post();
                        get_template_part('template-parts/content', 'service');
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>

    <?php if(have_posts()): while(have_posts()): the_post(); ?>
        <?php the_content(); ?>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>