class DonutMaker {
    constructor() {
        this.donutClick = 0
        this.dCount = 1

        this.autoClickerCount = 0
        this.autoClickerCost = 100

        this.multiplierCount = 0
        this.multiplierCost = 10
    }

    donutClicked() {
        this.donutClick = this.donutClick + this.dCount
    }

    getDonutCount() {
        return this.donutClick
    }

    addAutoClicker() {
        if (this.donutClick >= this.autoClickerCost) {
            this.donutClick = this.donutClick - this.autoClickerCost
            this.autoClickerCount++
            this.increaseAutoClickerCost()
        }
    }

    increaseAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.1
    }

    getAutoClickerCount() {
        return this.autoClickerCount
    }

    getAutoClickerCost() {
        return this.autoClickerCost
    }

    makeAutoClickerWork() {
        this.donutClick = this.donutClick + this.autoClickerCount * this.dCount
    }

    addMultiplier() {
        if (this.donutClick >= this.multiplierCost) {
            this.donutClick = this.donutClick - this.multiplierCost
            this.multiplierCount++
            this.increaseMultiplierCost()
            this.increaseDonutCountPercentage()
        }
    }

    getMultiplierCount() {
        return this.multiplierCount
    }

    getMultiplierCost() {
        return this.multiplierCost
    }

    increaseMultiplierCost() {
        this.multiplierCost = this.multiplierCost + this.multiplierCost * 0.1
    }

    increaseDonutCountPercentage() {
        this.dCount = this.dCount + this.dCount * 0.2
    }

    getDonutValue() {
        return this.dCount
    }
}