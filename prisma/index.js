const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function adminData() {
  // await prisma.tbadmin.create({
  //   data: {
  //     username: 'test4',
  //     password: 'test4',
  //   },
  // })
  // await prisma.tbadmin.delete({
  //   where: {
  //     id:5
  //   }
  // })
  const adminData = await prisma.tbadmin.findMany()
  console.log(adminData)
  adminData.map((item)=>(
  console.log(item.username)
  ))
}

adminData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

module.export = adminData