const section_counter = document.querySelector("#section_counter");
let counters = document.querySelectorAll(".counter-item .count");

// Scroll Animation
let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;
  
      let speed = 200;
      counters.forEach((counter, index) => {
        function UpdateCounter() {
          const targetNumber = +counter.dataset.target;
          const initialNumber = +counter.innerText;
          const incPerCount = targetNumber / speed;
          if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 50);
          }
          else {
            counter.innerText = targetNumber;
          }
        }
        UpdateCounter();
      });
      observer.unobserve(section_counter);
    },
    {
      root: null,
      threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
  );
  
  CounterObserver.observe(section_counter);
