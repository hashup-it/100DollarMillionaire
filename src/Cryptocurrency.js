export class Cryptocurrency {
    constructor(name,  shortName,  color, dataset, image, releaseDate, released = false) {
        this.name = name;
        this.shortName = shortName;
        this.color = color;
        this.priceHistory = dataset;
        this.image = image
        this.releaseDate = releaseDate;
        this.released = released;
    }
}