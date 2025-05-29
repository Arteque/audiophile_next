const Currency = (cur:number) => {
    const price = Intl.NumberFormat("us-US",{style:"currency",currency:"usd"}).format(cur)
    return price
}

export default Currency