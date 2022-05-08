<section class="width-full my-20 feed-videos-responsive">
    <div class="feed-videos container center">
        <div class="header">
            <h4>Videos</h4>
        </div>
        <div class="body">
            @foreach ($videos as $video)
                <a class="video" href="#" 
                    data-modal=".home_video_modal" 
                    data-uri="{{ $video->video }}">
                        <div class="box-img">
                            <img src="{{ url('storage/' . $video->cover) }}" alt="">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <p>{{ $video->title }}</p>
                </a>
            @endforeach
        </div>
    </div>

    <div class="home_video_modal j_modal_close">
        <div class="home_video_modal_box">
            <div class="embed">
                <iframe width="560" class="iframe_1"
                    src=""
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>