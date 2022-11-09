const svg_path = `
<g>
<path d="M8 0L14.9282 18H1.0718L8 0Z" fill="#D9D9D9"/>
<path d="M7.8125 17H5.79261V10.4545H7.90199C8.53693 10.4545 9.08026 10.5856 9.53196 10.8477C9.98366 11.1076 10.3299 11.4815 10.5707 11.9695C10.8114 12.4553 10.9318 13.0369 10.9318 13.7145C10.9318 14.3963 10.8104 14.9833 10.5675 15.4755C10.3246 15.9656 9.97088 16.3427 9.50639 16.6069C9.0419 16.869 8.47727 17 7.8125 17ZM6.58523 16.2969H7.76136C8.30256 16.2969 8.75107 16.1925 9.10689 15.9837C9.46271 15.7749 9.72798 15.4776 9.9027 15.092C10.0774 14.7063 10.1648 14.2472 10.1648 13.7145C10.1648 13.1861 10.0785 12.7312 9.90589 12.3498C9.73331 11.9663 9.4755 11.6722 9.13246 11.4677C8.78942 11.261 8.36222 11.1577 7.85085 11.1577H6.58523V16.2969Z" fill="black"/>
</g>`
const query = '[aria-label="Verified account"]'

window.addEventListener("load", async () => {    
    new MutationObserver(() => {
        if (document.querySelector(query)) {
            document.querySelectorAll(query).forEach(checkmark => {
                if (checkmark.hasAttribute("is-dunce"))
                    return

                checkmark.setAttribute("is-dunce", "facual information")
                checkmark.innerHTML = svg_path
            })
        }
    }).observe(document.body, {
        childList: true,
        subtree: true
    })
})