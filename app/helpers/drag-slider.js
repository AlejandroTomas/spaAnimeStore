export default function dragSlider(){
    if(document.querySelector(".new-post-container")){
        let slider= document.querySelector(".new-post-container");
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX); //scroll-fast
            var prevScrollLeft = slider.scrollLeft;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    if(document.querySelector(".best-post-container")){
        (()=>{
            let sliderBest= document.querySelector(".best-post-container");
            let isDownBest = false;
            let startXBest;
            let scrollLeft;

            sliderBest.addEventListener('mousedown', (e) => {
                isDownBest = true;
                sliderBest.classList.add('active');
                startXBest = e.pageX - sliderBest.offsetLeft;
                scrollLeft = sliderBest.scrollLeft;
            });

            sliderBest.addEventListener('mouseleave', () => {
                isDownBest = false;
                sliderBest.classList.remove('active');
            });

            sliderBest.addEventListener('mouseup', () => {
                isDownBest = false;
                sliderBest.classList.remove('active');
            });

            sliderBest.addEventListener('mousemove', (e) => {
                if (!isDownBest) return;
                e.preventDefault();
                const x = e.pageX - sliderBest.offsetLeft;
                const walk = (x - startXBest); //scroll-fast
                var prevScrollLeft = sliderBest.scrollLeft;
                sliderBest.scrollLeft = scrollLeft - walk;
            });
        })() 
    }

    if(document.querySelector(".wrapper-imgs")){
        (()=>{
            let sliderEstreno= document.querySelector(".wrapper-imgs");
            let isDownBest = false;
            let startXBest;
            let scrollLeft;

            sliderEstreno.addEventListener('mousedown', (e) => {
                isDownBest = true;
                sliderEstreno.classList.add('active');
                startXBest = e.pageX - sliderEstreno.offsetLeft;
                scrollLeft = sliderEstreno.scrollLeft;
            });

            sliderEstreno.addEventListener('mouseleave', () => {
                isDownBest = false;
                sliderEstreno.classList.remove('active');
            });

            sliderEstreno.addEventListener('mouseup', () => {
                isDownBest = false;
                sliderEstreno.classList.remove('active');
            });

            sliderEstreno.addEventListener('mousemove', (e) => {
                if (!isDownBest) return;
                e.preventDefault();
                const x = e.pageX - sliderEstreno.offsetLeft;
                const walk = (x - startXBest); //scroll-fast
                var prevScrollLeft = sliderEstreno.scrollLeft;
                sliderEstreno.scrollLeft = scrollLeft - walk;
            });
        })() 
    }
}