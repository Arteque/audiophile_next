import CategorieItemsList from "@/_components/Assets/CategorieItemsList"
const Categories = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 lg:gap-[2rem] lg:py-[4rem]">
            <CategorieItemsList />
        </div>
      </div>
    </section>
  )
}

export default Categories
