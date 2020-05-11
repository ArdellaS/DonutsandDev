import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Donut, Donuts } from "./interfaces/donuts";

@Injectable({
  providedIn: "root",
})
export class DonutsService {
  apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json";

  hasFetched: Promise<any>;
  resolveHasFetched: any;

  constructor(private http: HttpClient) {
    this.hasFetched = new Promise((resolve) => {
      this.resolveHasFetched = resolve;
    });
    const firstDonut = localStorage.getItem("donut1");

    if (!firstDonut || firstDonut == "") {
      this.fetchDonuts();
    } else {
      this.resolveHasFetched();
    }
  }

  async hasFetchedData() {
    await this.hasFetched;
  }

  async fetchDonuts() {
    const apiDonuts = await this.http.get<Donuts>(`${this.apiUrl}`).toPromise();
    console.log({ apiDonuts });
    for (let donut of apiDonuts.results) {
      const apiDonut = await this.http.get<Donut>(donut.ref).toPromise();
      localStorage.setItem(`donut${donut.id}`, JSON.stringify(apiDonut));
    }
    this.resolveHasFetched();
  }

  async getDonuts() {
    await this.hasFetchedData();
    const donutArray = [];
    for (let index = 1; index < localStorage.length + 1; index++) {
      const storedDonut = localStorage.getItem(`donut${index}`);

      if (!storedDonut || storedDonut == "") {
        break;
      }
      const donut = JSON.parse(storedDonut);
      donutArray.push(donut);
    }
    return { count: donutArray.length, results: donutArray } as Donuts;
  }

  async getDonutById(id: number) {
    await this.hasFetchedData();
    const storedDonut = localStorage.getItem(`donut${id}`);
    return JSON.parse(storedDonut) as Donut;
  }

  updateDonut(id: number, donut: Partial<Donut>) {
    const storedDonut = localStorage.getItem(`donut${id}`);

    const oldDonut = JSON.parse(storedDonut) as Donut;

    const newDonut = {
      ...oldDonut,
      name: donut.name,
      calories: donut.calories,
      photo: donut.photo,
    };

    localStorage.setItem(`donut${id}`, JSON.stringify(newDonut));
  }

  getOneDonut(id: number) {
    return this.http.get<Donut>(`${this.apiUrl}/${id}.json`);
  }
}
