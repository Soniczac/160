AFRAME.registerComponent("tour", {
    init: function () {
        this.placesContainer = this.el;
        this.createCards();
    },
    createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("position", {x: 0, y: 5, z: 0.1});
        entityEl.setAttribute("material", {src: item.url})
    },
    handleMouseEvents: function () {
       this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const postersId = [
            "superman",
            "spiderman",
            "captain-aero",
            "outer-space",
        ];
        if (postersId.includes(id)) {
            const postersContainer = document.querySelector("#posters-container");
            postersContainer.setAttribute("cursor-listner", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {color: "#1565c0"});
        }
       }); 
    },
    
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    //check the selected item to info banner
    if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
            itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", {x: 0, y: 0, z:-1 });
        cursorEl.setAttribute("geometry", {
            radiusInner: 0.03,
            radiusOutter: 0.04,
        });
    }, else: {
       fadeBackgroundEl.setAttribute("visible", false),
       titleEl.setAttribute("visible", true),
       cursorEl.setAttribute("geometry", {
        radiusInner: 0.08,
        radiusOutter: 0.12,
       }),
    },
    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        c = fadeBackgroundEl.children;
        if (c.length > 0) {
            var i;
            for (i = 0; i <= c.length; i++) {
                fadeBackgroundEl.removeChild(c[i]);
            }
        } else {
            this.handleMouseClickEvents();
        }
    },

    if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
            itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
            radiusInner: 0.03,
            radiusOuter: 0.04,
        });
    }, else :{
        fadeBackgroundEl.setAttribute("visible", false),
        titleEl.setAttribute("visible", true),
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
            radiusInner: 0.08,
            radiusOuter: 0.12,
        }),
    },
    update: function() {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        c = fadeBackgroundEl.children;
        if (c.length > 0) {
            var i;
            for (i = 0; i <= c.length, i++) {
                fadeBackgroundEl.removeChild(c[i]);
            }
        } else {
            this.handleMouseClickEvents();
        }
    },
})