<template>
  <div class="rubric">
    <form action="#" method="get">

      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Observer’s Name</label>
        </div>
        <select class="custom-select" name="submitter" id="inputGroupSelect01" required="">
          <option selected>Choose...</option>
          <option value="1">Julie Terry</option>
          <option value="2">Karl Suits</option>
          <option value="3">Robert Hyndman</option>
        </select>
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect02">Observation Type</label>
        </div>
        <select class="custom-select" name="submitter" id="inputGroupSelect02" required="">
          <option selected>Choose...</option>
          <option value="1">Inquiry</option>
          <option value="2" disabled>Inquiry</option>
          <option value="3" disabled>Inquiry</option>
        </select>
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect02">Observed Teacher</label>
        </div>
        <select class="custom-select" name="submitter" id="inputGroupSelect03" disabled>
          <option selected>Choose...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Comments<br>and other</span>
        </div>
        <textarea class="form-control" name="comment" aria-label="With textarea" aria-describedby="comment"></textarea>
      </div>
      <small id="comment" class="form-text text-muted">
        Can be edited <b>later</b> and <b>after</b> the finishing the form.
      </small>
      <hr>
      <nav>
        <div class="nav nav-pills" id="pills-tab" role="tablist">
          <a class="nav-item nav-link active" id="pills-Instruction-tab" data-toggle="pill" href="#pills-Instruction" role="tab" aria-controls="pills-Instruction" aria-selected="true">Instruction</a>
          <a class="nav-item nav-link" id="pills-Discourse-tab" data-toggle="pill" href="#pills-Discourse" role="tab" aria-controls="pills-Discourse" aria-selected="false">Discourse</a>
          <a class="nav-item nav-link" id="pills-Assesment-tab" data-toggle="pill" href="#pills-Assesment" role="tab" aria-controls="pills-Assesment" aria-selected="false">Assesment</a>
          <a class="nav-item nav-link" id="pills-Curriculum-tab" data-toggle="pill" href="#pills-Curriculum" role="tab" aria-controls="pills-Curriculum" aria-selected="false">Curriculum</a>
        </div>
      </nav>
      <hr>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-Instruction" role="tabpanel" aria-labelledby="pills-Instruction-tab">
          <div v-for="base in bases" v-if="base.index === 1">
            <h2>{{base.title}}</h2>
            <div v-for="row in base.rows" v-bind:key="row.heading" id="row">
              <h5>{{row.heading}}</h5>
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
        <div class="tab-pane fade" id="pills-Discourse" role="tabpanel" aria-labelledby="pills-Discourse-tab">
          <div v-for="base in bases" v-if="base.index === 2">
            <h2>{{base.title}}</h2>
            <div v-for="row in base.rows" v-bind:key="row.heading" id="row">
              <h5>{{row.heading}}</h5>
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
        <div class="tab-pane fade" id="pills-Assesment" role="tabpanel" aria-labelledby="pills-Assesment-tab">
          <div v-for="base in bases" v-if="base.index === 3">
            <h2>{{base.title}}</h2>
            <div v-for="row in base.rows" v-bind:key="row.heading" id="row">
              <h5>{{row.heading}}</h5>
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
        <div class="tab-pane fade" id="pills-Curriculum" role="tabpanel" aria-labelledby="pills-Curriculum-tab">
          <div v-for="base in bases" v-if="base.index === 4">
            <h2>{{base.title}}</h2>
            <div v-for="row in base.rows" v-bind:key="row.heading" id="row">
              <h5>{{row.heading}}</h5>
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
      </div>
      <hr>
      <button class="btn btn-primary" type="submit">Button</button>
    </form>
  </div>
</template>

<script>
import rubric from './list-rubric'

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
