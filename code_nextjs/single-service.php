<?php get_header(); ?>

<main class="pt-20">
    <?php if(have_posts()): while(have_posts()): the_post(); ?>
        <article class="max-w-7xl mx-auto px-4 py-12">
            <header class="mb-8">
                <h1 class="text-4xl font-bold text-bilanis-darkBlue mb-4"><?php the_title(); ?></h1>
                <?php if(function_exists('get_field') && get_field('description_courte')): ?>
                    <p class="text-xl text-gray-600"><?php echo get_field('description_courte'); ?></p>
                <?php endif; ?>
            </header>

            <?php if(has_post_thumbnail()): ?>
                <div class="mb-8">
                    <?php the_post_thumbnail('full', array('class' => 'w-full h-96 object-cover rounded-lg')); ?>
                </div>
            <?php endif; ?>

            <div class="prose max-w-none">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>