<?php get_header(); ?>

<main class="pt-20">
    <?php if(have_posts()): ?>
        <div class="max-w-7xl mx-auto px-4 py-12">
            <?php while(have_posts()): the_post(); ?>
                <?php get_template_part('template-parts/content', get_post_type()); ?>
            <?php endwhile; ?>
            
            <?php the_posts_pagination(); ?>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>