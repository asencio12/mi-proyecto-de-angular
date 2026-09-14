import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {

  filterType: string = "";
  _name: string = "";
  _difficulty: string = "";

  _router = inject(Router);

  viewDetails(id: number) {
    this._router.navigate(["recipes-detail", id]);
  }

  recipesList = {
    "recipes": [
      { "id": 1, "name": "Classic Margherita Pizza", "difficulty": "Easy"

       },
      { "id": 2, "name": "Vegetarian Stir-Fry", "difficulty": "Medium"

       },
      { "id": 3, "name": "Chocolate Chip Cookies", "difficulty": "Easy" 

      },
      { "id": 4, "name": "Chicken Alfredo Pasta", "difficulty": "Medium" 

      },
      { "id": 5, "name": "Mango Salsa Chicken", "difficulty": "Easy" 

      },
      { "id": 6, "name": "Quinoa Salad with Avocado", "difficulty": "Easy" 

      },
      { "id": 7, "name": "Tomato Basil Bruschetta", "difficulty": "Easy" 

      },
      { "id": 8, "name": "Beef and Broccoli Stir-Fry", "difficulty": "Medium"

       },
      { "id": 9, "name": "Caprese Salad", "difficulty": "Easy" 

      },
      { "id": 10, "name": "Shrimp Scampi Pasta", "difficulty": "Medium" 

      },
      { "id": 11, "name": "Chicken Biryani", "difficulty": "Medium" 

      },
      { "id": 12, "name": "Chicken Karahi", "difficulty": "Easy"

       },
      { "id": 13, "name": "Aloo Gobhi", "difficulty": "Easy" 

      },
      { "id": 14, "name": "Customized Mango Lassi", "difficulty": "Easy"

       },
      { "id": 15, "name": "Customized Masala Chai", "difficulty": "Easy"

       },
      { "id": 16, "name": "Sesame Tofu Stir-Fry", "difficulty": "Hard"

       },
      { "id": 17, "name": "Beef Tacos", "difficulty": "Medium" 

      },
      { "id": 18, "name": "Lentil Soup", "difficulty": "Easy"

       },
      { "id": 19, "name": "Greek Salad", "difficulty": "Easy"

       },
      { "id": 20, "name": "Pesto Pasta", "difficulty": "Easy"

       },
      { "id": 21, "name": "Vegetable Curry", "difficulty": "Medium" }
      ,
      { "id": 22, "name": "Fish Tacos", "difficulty": "Medium" 

      },
      { "id": 23, "name": "Chicken Noodle Soup", "difficulty": "Easy" 

      },
      { "id": 24, "name": "Spinach Ricotta Stuffed Shells", "difficulty": "Hard" 

      },
      { "id": 25, "name": "Mushroom Risotto", "difficulty": "Hard" 

      },
      { "id": 26, "name": "BBQ Chicken Wings", "difficulty": "Medium" 

      },
      { "id": 27, "name": "Falafel Wrap", "difficulty": "Medium"

       },
      { "id": 28, "name": "Eggplant Parmesan", "difficulty": "Hard"

       },
      { "id": 29, "name": "Avocado Toast", "difficulty": "Easy" 

      },
      { "id": 30, "name": "Pancake Stack", "difficulty": "Easy" 
        
      }
    ]
  };

}