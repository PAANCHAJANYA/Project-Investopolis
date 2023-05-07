window.onload = function () {Particles.init({selector: ".background"});};
const particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 400,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 60,
        connectParticles: false
      }
    }
  ]
});
class NavigationPage {
  constructor()
  {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".nav-tab").click(function () {self.onTabClick(event, $(this));});
    $(window).scroll(() => {this.onScroll();});
    $(window).resize(() => {this.onResize();});
  }
  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop = $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }
  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }
  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }
  checkHeaderPosition() {
    const headerHeight = 75;
    let offset = $(".nav").offset().top + $(".nav").height() - this.tabContainerHeight - headerHeight;
    if($(window).scrollTop() > offset)
    {
      $(".nav-container").addClass("nav-container--top-first");
    }
    else
    {
      $(".nav-container").removeClass("nav-container--top-first");
    }
  }
  findCurrentTabSelector(element)
  {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-tab").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom)
      {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if(this.currentId != newCurrentId || this.currentId === null)
    {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }
  setSliderCss()
  {
    let width = 0;
    let left = 0;
    if (this.currentTab)
    {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
    }
    $(".nav-tab-slider").css("width", width);
    $(".nav-tab-slider").css("left", left);
  }
}
new NavigationPage();
$('.slider2').each(function()
{
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  function move(newIndex)
  {
    var animateLeft, slideLeft;
    advance();
    if ($group.is(':animated') || currentIndex === newIndex)
    {
      return;
    }
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    if (newIndex > currentIndex)
    {
      slideLeft = '100%';
      animateLeft = '-100%';
    }
    else
    {
      slideLeft = '0%';
      animateLeft = '0%';
    }
    $group.animate({left: animateLeft}, function()
    {
      $slides.eq(newIndex).css({left: 0});
      $group.css({left: 0});
      $slides.eq(currentIndex).css({display: 'none'});
      $slides.eq(newIndex).css({display: 'flex',left: slideLeft});
      currentIndex = newIndex;
    });
  }
  function advance()
  {
    clearTimeout(timeout);
    timeout = setTimeout(function()
    {
      if(currentIndex < ($slides.length - 1))
      {
        move(currentIndex + 1);
      }
      else
      {
        move(0);
      }
    }, 4000);
  }
  $('.next_btn').on('click', function()
  {
    if (currentIndex < ($slides.length - 1))
    {
      move(currentIndex + 1);
    }
    else
    {
      move(0);
    }
  });
  $('.previous_btn').on('click', function()
  {
    if (currentIndex !== 0)
    {
      move(currentIndex - 1);
    }
    else
    {
      move(2);
    }
  });
  $.each($slides, function(index)
  {
    var $button = $('<a class="slide_btn">&bull;</a>');
    if (index === currentIndex)
    {
      $button.addClass('active');
    }
    $button.on('click', function(){move(index);}).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  advance();
});