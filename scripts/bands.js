import { getBands } from "./database.js"

const bands = getBands()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li data-id="${band.id}"
                    data-name="${band.name}"
                    data-members="${band.members}"
                    data-yearFormed="${band.yearFormed}"
                    data-type="band"
                    >${band.name}
                    </li>`
    }

    html += "</ul>"

    return html
}