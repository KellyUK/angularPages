import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the beach",
      url:
        "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the mountain",
      url:
        "https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the forest",
      url:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "At the jungle",
      url:
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the desert",
      url:
        "https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    },
    {
      title: "At the city",
      url:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
    }
  ];
}
