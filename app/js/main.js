$(".work__wrapper").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$(".menu__btn").on("click", function () {
  $(".menu__btn").toggleClass("menu__btn--active");
  $(".menu-list").toggleClass("menu-list--active");
  // $(".scroll-link").toggleClass("menu-list--active");
});

$(".scroll-link").on("click", function () {
  $(".menu__btn").removeClass("menu__btn--active");
  $(".menu-list").removeClass("menu-list--active");
});

const form = document.getElementById("dorm");

const formAll = document.querySelectorAll("form");

const postData = (body) => {
  return fetch("telegram.php", {
    method: "POST",
    body: body,
  });
};


  form.addEventListener("submit", (e) => {
    const input = form.querySelectorAll("input");

    e.preventDefault();
    console.log(new FormData(form));
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      console.log(val, key);
      body[key] = val;
    });

    postData(formData)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
    input.forEach((e) => {
      e.value = "";
    });
  });
