<?php get_header(); ?>

<main class="pt-20">
    <?php if(have_posts()): while(have_posts()): the_post(); ?>
        <article class="max-w-7xl mx-auto px-4 py-12">
            <h1 class="text-4xl font-bold text-bilanis-darkBlue mb-8"><?php the_title(); ?></h1>
            
            <div class="prose max-w-none">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>