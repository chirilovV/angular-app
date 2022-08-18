import {Component, OnInit} from '@angular/core';
import {Article} from "./article.interface";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articles: Article[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.articles = [
      {
        title: 'PAHO seeks to strengthen preparedness and response to future respiratory virus pandemics in Latin America and the Caribbean',
        imagePath: 'assets/img/colibry.png',
        text: `More than a month after heavy thunderstorms wreaked havoc in Yemen, their effects are still being felt. More than 31,000 households experienced the loss of life or property—in a country where food insecurity was already at an all-time high.
         To best understand the needs and work being done, the Head of the International Federation of the Red Cross and Red Crescent’s (IFRC) Delegation in Yemen, Sami Fakhouri paid a 4-day visit to Yemen Red Crescent’s (YRCS) branches and health centers in Hajjah and Saadah`,
        postedBy: 'European Bank for Reconstruction and Development'
      },
      {
        title: 'The Government of the Gambia and WFP join forces to enhance agriculture and food security of vulnerable communities in the country',
        imagePath: 'assets/img/biden.png',
        text: `“It is gratifying to note that this new project will scale up the achievements of similar agriculture and food security projects previously implemented by the Government of the Gambia,” said Dr. Demba Sabally, Minister of Agriculture. “ I am honored to see that the project will build synergies with other partners’ work, particularly that of the World Food Programme (WFP) geared towards increasing climate resilient value chain development as the basis for a sustainable Home-Grown School Feeding Programme”, Sabally added`,
        postedBy: 'World Food Programme '
      },
      {
        title: 'PAHO seeks to strengthen preparedness and response to future respiratory virus pandemics in Latin America and the Caribbean',
        imagePath: 'assets/img/eco.png',
        text: `More than a month after heavy thunderstorms wreaked havoc in Yemen, their effects are still being felt. More than 31,000 households experienced the loss of life or property—in a country where food insecurity was already at an all-time high.
         To best understand the needs and work being done, the Head of the International Federation of the Red Cross and Red Crescent’s (IFRC) Delegation in Yemen, Sami Fakhouri paid a 4-day visit to Yemen Red Crescent’s (YRCS) branches and health centers in Hajjah and Saadah`,
        postedBy: 'European Bank for Reconstruction and Development'
      },
    ]
  }
}
