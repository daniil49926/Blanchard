document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".tab-step").forEach(function(tabsBtn){
        tabsBtn.addEventListener("click", function(event){
            
            const path = event.currentTarget.dataset.path


            document.querySelectorAll(".tab-content").forEach(function(tabcon){
                tabcon.classList.remove("tab-content-active")
            });        
            document.querySelectorAll(".tab-step").forEach(function(s){
                s.classList.remove("tab-step-active")
            })

            document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
            document.querySelector(`[data-path="${path}"]`).classList.add("tab-step-active")
        });
    });

    document.querySelectorAll(".catalog__link-persons").forEach(function(link_b){
        link_b.addEventListener("click", function(event_link){
            
            const path = event_link.currentTarget.dataset.path


            document.querySelectorAll(".catalog__tab-item-left").forEach(function(link){
                link.classList.remove("link-active")
            });        
            document.querySelectorAll(".catalog__link-persons").forEach(function(a){
                a.classList.remove("link-butt-active")
            })

            link_b.classList.add("link-butt-active")
            document.querySelector(`[data-target="${path}"]`).classList.add("link-active")
        });
    });

    document.querySelectorAll(".tab-step").forEach(function(keypress){
        keypress.addEventListener("keypress", function(event_key){
            
            const path_key = event_key.currentTarget.dataset.path


            document.querySelectorAll(".tab-content").forEach(function(tabcon_key){
                tabcon_key.classList.remove("tab-content-active")
            });        
            document.querySelectorAll(".tab-step").forEach(function(s_key){
                s_key.classList.remove("tab-step-active")
            })

            document.querySelector(`[data-target="${path_key}"]`).classList.add("tab-content-active")
            document.querySelector(`[data-path="${path_key}"]`).classList.add("tab-step-active")
        });
    });
});

document.querySelector(`[data-target="third"]`).classList.add("tab-content-active")
document.querySelector(`[data-path="third"]`).classList.add("tab-step-active")

document.querySelector('[data-target="domenico-info"]').classList.add("link-active")
document.querySelector('[data-path="domenico-info"]').classList.add("link-butt-active")
