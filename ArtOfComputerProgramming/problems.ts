export class ArtOfComputerProgramming {
    public highestCommonDivsor = (m, n) => {
        // we need to divide m / n and get the remainder 
        const q = Math.floor(m / n);
        console.log(q);
        // get the remiander
        const remainder = m - (q * n);
        if(remainder === 0) return n;
        // we need to reduce
        return this.highestCommonDivsor(n, remainder);
    }
}