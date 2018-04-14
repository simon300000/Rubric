<template>
  <div class="rubric">
    <div v-for="base in bases" v-bind:key="base.title" id="base">
      <h1>{{base.title}}</h1>
      <div v-for="row in base.rows" v-bind:key="row.heading" id="row">
        <h3>{{row.heading}}</h3>
        <div class="grid_base">
          <div v-for="item in row.items" v-bind:key="item.content" id="item">
            <div class="base">
              <div class="base_radio">
                <input type="radio" :id="'radio' + base.index + '_' + row.index + '_' + item.index" :name="'item' + base.index + '_' + row.index" :value="item.index" required="">
                <label :for="'radio' + base.index + '_' + row.index + '_' + item.index">
                  {{item.content}}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rubric from './list'

export default {
  name: 'rubric',
  data() {
    return {
      bases: rubric
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base_radio input[type="radio"] {
  display: none;
}

.base_radio label {
  display: inline-block;
  background-color: #ddd;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 5px 5px 5px;
}

.base_radio label {
  margin-top: 0;
  margin-bottom: 0;
}

.base_radio input[type="radio"]+label {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  /* white-space: nowrap; */
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  margin-top: 0;
  margin-bottom: 0;
}

.base_radio input[type="radio"]:hover+label {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62
}

.base_radio input[type="radio"]:checked+label {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

@media screen and (min-width: 465px) {
  .grid_base {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "box1 box2 box3 box4";
    grid-column-gap: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .base {
    grid-area: box1, box2, box3, box4;
    height: auto;
    width: 177.5px;
  }
}
</style>
