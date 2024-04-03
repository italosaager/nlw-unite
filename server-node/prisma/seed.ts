import { prisma } from '../src/lib/prisma';

async function seed() {
    await prisma.event.create({
        data: {
            id: 'a71ccf98-6f32-4a78-8876-004dff4ee7bc',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
})
