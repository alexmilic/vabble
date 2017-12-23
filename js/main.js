$(document).ready(function () {
    /*OWL Caraousel Settings*/
    $(".items-slide").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true
    });

    /* read more - toggle btn*/
    $('.read-more-btn').click(function (e) {
        e.preventDefault();
        $(this).prev().toggleClass('show-text');
        if ($(this).prev().hasClass('show-text')) {
            $(this).text('Hide less');
        } else {
            $(this).text('Read more');
        }
    });

    /* Edit menu post*/
    $('.edit-menu-btn').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })

    /* Likes */
    function likes(e) {
        e.preventDefault();
        $target = $(this);
        $span = $target.siblings();
        $currentLikeValue = $span.text();

        if (!$span.hasClass('liked')) {
            $span.addClass('liked');
            $newValue = parseInt($currentLikeValue) + 1;
            $($target).css('color', '#0093ff');
            $($target).css('font-weight', 'bold');
        } else {
            $span.removeClass('liked');
            $newValue = parseInt($currentLikeValue) - 1;
            $($target).css('color', '#8d8d8d');
            $($target).css('font-weight', 'normal');
        }

        $currentLikeValue = $newValue;
        // console.log($currentLikeValue);
        $span.text($currentLikeValue);
    }

    /*main menu */
    $('.open-menu, .profile').click(function () {
        $('.profile-menu').slideToggle();
    });

    /* search input*/
    $('.search-nav-btn').click(function () {
        $('.header-search').toggleClass('slideSearch-top');
    });

    /* share links */
    function expandShareLinks(e) {
        e.preventDefault();
        $target = $(this);
        $expandDiv = $target.prev().toggle("slow");
        //console.log($expandDiv);
    }

    // Add comment
    function addCommentDOM(e) {
        e.preventDefault();
        $target = $(this);
        $input = $target.parents('.add-comment-post').children().find('.form-control');
        $inputValue = $input.val();
        // $inputValue2 = $inputValue.length;
        //console.log($inputValue);

        if ($inputValue != 0) {
            if ($inputValue.lenght > 163) { }
            else { }
            $commentDom = $(`<div class='comment'>
                <div class='post-header comment-header'>
                    <div class='user-img'>
                        <img src='images/user-post-3.png' alt=''>
                    </div>
                    <div class='user'>
                        <h1>Chrissy Davids Smith</h1>
                        <span>add a comment</span>
                    </div>
                </div>
                <div class='content'>
                    <h2>Tempor incididunt ut labore et dolore magna</h2>
                <p>`+ $inputValue + `</p>
                </div>
            </div>
            <div class='clearfix'></div>'`);
            $commentSection = $target.parents('.main-post').children('.post-content');
            //console.log($commentSection);
            $commentSection.append($commentDom);
            $input.val('');
        }
    }

    /*remove post*/
    function deletePost(e) {
        e.preventDefault();
        $target = $(this);
        $input = $target.closest('.main-post');
        $userConfirm = confirm("Are you sure you want to delete post?");
        console.log($userConfirm);
        if ($userConfirm == true) {
            $input.remove();
        }
        //console.log($input);
    }



    // trigger likes function
    $('.addLike').click(likes);
    // trigger expandShareLinks function
    $('i[class~="fa-share-alt"]').click(expandShareLinks);
    // trigger addCommentDOM function
    $('.button-send').click(addCommentDOM);
    // trigger deletePost function
    $('.delete').click(deletePost);

});// document.ready END


