// TODO: create a new page component based on the bottom half of the design in public/mockups/home.png

// You will first need to create three components: SecondaryImage, PetAboutText, and PetCard in the src/components folder. 

// You should also create stories for each of these components in the src/components folder using storybook.

// Use these three components to create the About page
// Look in the public/mockups folder for the design
// 1. Create a component called SecondaryImage based on the design in public/mockups/secondary-image.png
// 2. Create a component called PetAboutText based on the design in public/mockups/description-title.png
// 3. Create a component called PetCard based on the design in public/mockups/amigo-card.png
// Optional: include the "Header from the Home page" at the top of the About page
import SecondaryImage from '../components/SecondaryImage';
import PetHeaderLogo from '../components/PetHeaderLogo';
import PetHeaderMenu from '../components/PetHeaderMenu';
import PetAboutText from '@/components/PetAboutText';

export default function AboutPage() {
    return (
        <div className="bg-rose-500">
            <div class="container mx-auto px-4">
                <div className="flex justify-around py-3">
                    <PetHeaderLogo logoSrc="/img/paw-face-sm.png" brandName="FindAFriend" />
                    <PetHeaderMenu menuItems={["Home", "Sobre o app", "Animais disponíveis", "Sobre a FindAFriend", "Contact"]} />
                </div>
            </div>
            <main>
                <PetAboutText />
                <SecondaryImage src="/img/pet-app-layers.png"/>
            </main>
        </div>
    );
}