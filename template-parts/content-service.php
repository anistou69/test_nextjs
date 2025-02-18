<article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-lg shadow-lg overflow-hidden'); ?>>
    <div class="relative h-48">
        <?php if(has_post_thumbnail()): ?>
            <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover')); ?>
        <?php endif; ?>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <h3 class="absolute bottom-4 left-4 text-xl font-bold text-white"><?php the_title(); ?></h3>
    </div>
    <div class="p-6">
        <?php if(function_exists('get_field')): ?>
            <p class="text-gray-600 mb-4"><?php echo get_field('description_courte'); ?></p>
        <?php endif; ?>
        <a href="<?php the_permalink(); ?>" class="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-bilanis hover:opacity-90 transition-opacity duration-300">
            En savoir plus
        </a>
    </div>
</article>