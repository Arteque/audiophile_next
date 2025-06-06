const MainNav = async () => {

    try{
        const resp = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/navigation`)
        const data = await resp.json()
        console.log(data)
    } catch (err) {
        console.log("Error :", err)
    }

  return (
    <div>
      MainNav
    </div>
  )
}

export default MainNav
