(() => {
  "use strict";
  let e = [
      {
        name: "Mama Bear",
        position: "Chef",
        phone: "555-555-5554",
        email: "totallyRealEmail@notFake.com",
        pic: "./img/mamabear.png",
        alt: "Mama Bear's Photo",
      },
      {
        name: "Papa Bear",
        position: "Manager",
        phone: "555-555-5555",
        email: "perfectlyRealEmail@notFake.com",
        pic: "./img/papabear.jpeg",
        alt: "Papa Bear's Photo",
      },
      {
        name: "Baby Bear",
        position: "Waiter",
        phone: "555-555-5556",
        email: "totallyRealEmail@notFake.com",
        pic: "./img/babybear.jpeg",
        alt: "Baby Bear's Photo",
      },
    ],
    t = {
      hours: {
        sunday: { open: "8", close: "8" },
        monday: { open: "6", close: "6" },
        tuesday: { open: "6", close: "6" },
        wednesday: { open: "6", close: "6" },
        thursday: { open: "6", close: "10" },
        friday: { open: "6", close: "10" },
        saturday: { open: "8", close: "10" },
      },
      location: {
        street: "123 Forest Drive",
        city: "Forestville",
        state: "Maine",
      },
    },
    a = [
      { item: !1, subtitle: "Beverages" },
      {
        item: !0,
        name: "Honey Tea",
        description:
          "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
        price: "$2",
        pic: "./img/honeyTea.jpg",
        alt: "Picture of honey tea.",
      },
      {
        item: !0,
        name: "Beary Tea",
        description:
          "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
        price: "$3",
        pic: "./img/bearyTea.jpg",
        alt: "Picture of beary tea.",
      },
      { item: !1, subtitle: "Sides" },
      {
        item: !0,
        name: "Toast and Jam",
        description:
          "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        price: "$1",
        pic: "./img/toast.jpg",
        alt: "Picture of toast and jam.",
      },
      {
        item: !0,
        name: "Fresh Fruit",
        description:
          "A small bowl of fresh fruit, whatever we find at the market for the day.",
        price: "$3",
        pic: "./img/fruit.jpg",
        alt: "Picture of a bowl of fruit.",
      },
      { item: !1, subtitle: "Main Dishes" },
      {
        item: !0,
        name: "Pancakes",
        description:
          "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
        price: "$4",
        pic: "./img/pancakes.jpg",
        alt: "Picture of pancakes.",
      },
      {
        item: !0,
        name: "French Toast",
        description:
          "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
        price: "$5",
        pic: "./img/frenchToast.jpg",
        alt: "Picture of french toast.",
      },
      {
        item: !0,
        name: "Beary Veggie Sandwich",
        description:
          "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
        price: "$8",
        pic: "./img/veggieSandwich.jpg",
        alt: "Picture of veggie sandwich.",
      },
      {
        item: !0,
        name: "BLT",
        description:
          "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
        price: "$6",
        pic: "./img/blt.jpg",
        alt: "Picture of a BLT.",
      },
      {
        item: !0,
        name: "Bagel and Lox",
        description:
          "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
        price: "$8",
        pic: "./img/lox.jpg",
        alt: "Picture of bagel and lox.",
      },
      {
        item: !0,
        name: "Honeycomb",
        description:
          "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
        price: "$6",
        pic: "./img/honeyComb.jpg",
        alt: "Picture of honeycomb.",
      },
      {
        item: !0,
        name: "Beary Bowl",
        description:
          "Get a big ole bowl of our berries! Side of honey is $1 extra.",
        price: "$7",
        pic: "./img/berryBowl.jpeg",
        alt: "Picture of a berry bowl.",
      },
      {
        item: !0,
        name: "The Beary Best Porridge",
        description:
          "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
        price: "$5",
        pic: "./img/porridge.jpg",
        alt: "Picture of porridge.",
      },
    ],
    i = [
      {
        text: "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",
        name: "Goldilocks",
      },
    ],
    o = {
      title: "Beary's Breakfast Bar",
      beeClass1: "bee-left",
      beeClass2: "bee-right",
    },
    s = {
      title: "Menu",
      beeClass1: "menu-bee-left",
      beeClass2: "menu-bee-right",
    },
    n = {
      title: "Contact Us",
      beeClass1: "contact-bee-left",
      beeClass2: "contact-bee-right",
    };
  function r(e) {
    let t = document.createElement("div");
    t.classList.add("comb-outer"), t.classList.add(e[0].outer);
    let a = document.createElement("div");
    a.classList.add("comb-inner"), a.classList.add(e[0].inner);
    for (let t = 1; t < e.length; t++) {
      if ("p" == e[t].el) {
        var i = document.createElement("p");
        let a = document.createTextNode(e[t].text);
        i.appendChild(a);
      } else if ("h3" == e[t].el) {
        i = document.createElement("h3");
        let a = document.createTextNode(e[t].text);
        i.appendChild(a);
      } else
        ((i =
          document.createElement(
            "div"
          )).style.backgroundImage = `url(${e[t].source})`),
          i.setAttribute("title", e[t].text);
      i.classList.add(e[t].class), a.appendChild(i);
    }
    return t.appendChild(a), t;
  }
  function l(e, t, a) {
    let i = document.createElement("div");
    i.classList.add("heading-container");
    let o = document.createElement("div");
    o.classList.add("heading"),
      a && "" != a && i.classList.add(a),
      t && "" != t && o.classList.add(t);
    let s = document.createElement("h2");
    (s.textContent = e), o.appendChild(s), i.appendChild(o);
    let n = document.createElement("img");
    return (
      n.classList.add("decorations", "sub-container-hive"),
      n.setAttribute("src", "./img/honeycomb.svg"),
      i.appendChild(n),
      i
    );
  }
  function c(e, t, a, i, o) {
    let s = document.createElement("img");
    s.classList.add("decorations", t), s.setAttribute("src", "./img/bee.svg");
    let n = document.createElement("img");
    n.classList.add("decorations", a), n.setAttribute("src", "./img/bee.svg");
    let r = document.createElement("div");
    r.classList.add("heading-container");
    let l = document.createElement("div");
    l.classList.add("heading");
    let c = document.createElement("h1");
    return (
      (c.textContent = e),
      o && "" != o && r.classList.add(o),
      i && "" != i && l.classList.add(i),
      l.appendChild(c),
      r.appendChild(s),
      r.appendChild(n),
      r.appendChild(l),
      r
    );
  }
  function d(e, t, a, i, o) {
    if (
      ((function (e) {
        e.textContent = "";
      })(t),
      (function (e, t, a) {
        if ("home" == e) var i = c(a.title, a.beeClass1, a.beeClass2);
        else
          i =
            "contact" == e
              ? c(
                  a.title,
                  a.beeClass1,
                  a.beeClass2,
                  "contact-heading",
                  "contact-container"
                )
              : "menu" == e
              ? c(
                  a.title,
                  a.beeClass1,
                  a.beeClass2,
                  "menu-heading",
                  "menu-container"
                )
              : l(a.title);
        t.appendChild(i);
      })(e, t, i),
      a.forEach((a) => {
        if ("home" == e)
          var i = [
            { outer: "review-outer", inner: "review-inner" },
            { el: "p", text: a.text, class: "review" },
            { el: "p", text: a.name, class: "customer" },
          ];
        else if ("menu" == e) {
          if (!a.item) {
            var o = l(a.subtitle, "sub-heading", "sub-container");
            return void t.appendChild(o);
          }
          i = (function (e, t, a, i, o) {
            return [
              { outer: "menu-outer", inner: "menu-inner" },
              { el: "h3", text: e, class: "item-name" },
              { el: "p", text: t, class: "item-description" },
              { el: "p", text: a, class: "item-price" },
              { el: "img", text: o, class: "item-pic", source: i },
            ];
          })(a.name, a.description, a.price, a.pic, a.alt);
        } else
          i = (function (e, t, a, i, o, s) {
            return [
              { outer: "contact-outer", inner: "contact-inner" },
              { el: "h3", text: e, class: "person" },
              { el: "p", text: t, class: "position" },
              { el: "p", text: a, class: "phone" },
              { el: "p", text: i, class: "email" },
              { el: "img", text: s, class: "contact-pic", source: o },
            ];
          })(a.name, a.position, a.phone, a.email, a.pic, a.alt);
        let s = r(i);
        t.appendChild(s);
      }),
      "home" == e)
    ) {
      !(function (e, t) {
        (function (e) {
          return [
            [
              { outer: "info-hours-outer", inner: "info-hours-inner" },
              { el: "h3", text: "Hours", class: "hours" },
              {
                el: "p",
                text: `Sunday: ${e.hours.sunday.open}am - ${e.hours.sunday.close}pm`,
                class: "sunday",
              },
              {
                el: "p",
                text: `Monday: ${e.hours.monday.open}am - ${e.hours.monday.close}pm`,
                class: "monday",
              },
              {
                el: "p",
                text: `Tuesday: ${e.hours.tuesday.open}am - ${e.hours.tuesday.close}pm`,
                class: "tuesday",
              },
              {
                el: "p",
                text: `Wednesday: ${e.hours.wednesday.open}am - ${e.hours.wednesday.close}pm`,
                class: "wednesday",
              },
              {
                el: "p",
                text: `Thursday: ${e.hours.thursday.open}am - ${e.hours.thursday.close}pm`,
                class: "thursday",
              },
              {
                el: "p",
                text: `Friday: ${e.hours.friday.open}am - ${e.hours.friday.close}pm`,
                class: "friday",
              },
              {
                el: "p",
                text: `Saturday: ${e.hours.saturday.open}am - ${e.hours.saturday.close}pm`,
                class: "saturday",
              },
            ],
            [
              { outer: "info-location-outer", inner: "info-location-inner" },
              { el: "h3", text: "Location", class: "location" },
              {
                el: "p",
                text: `${e.location.street}, ${e.location.city}, ${e.location.state}`,
                class: "address",
              },
            ],
          ];
        })(t).forEach((t) => {
          let a = r(t);
          e.appendChild(a);
        });
      })(t, o);
      let e = document.createElement("img");
      e.classList.add("decorations", "hive"),
        e.setAttribute("src", "./img/honeycomb.svg"),
        t.appendChild(e);
    }
    return !0;
  }
  let m = ["home", "menu", "contact"],
    u = m[0],
    p = document.getElementById("content");
  d(u, p, i, o, t),
    m.forEach((r) => {
      var l = document.getElementById(r);
      l.addEventListener("click", () => {
        (u = (function (e, t) {
          let a = document.getElementById(`cover${e}`),
            i = document.getElementById(`cover${t}`);
          return a.classList.add("hidden"), i.classList.remove("hidden"), t;
        })(u, l.id)),
          "home" == l.id
            ? d(l.id, p, i, o, t)
            : "menu" == l.id
            ? d(l.id, p, a, s)
            : d(l.id, p, e, n);
      });
    });
})();
