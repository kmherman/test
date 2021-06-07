import define1 from "./a33468b95d0b15b0@703.js";
import define2 from "./a2e58f97fd5e8d7c@620.js";
import define3 from "./8a36f9f2f68dd1d1@36.js";
import define4 from "./a2166040e5fb39a6@229.js";
import define5 from "./60a0fe63ac4346ab@180.js";
import define6 from "./715b4c45cc45c3b3@223.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Final Project`
)});
  main.variable(observer("markdown")).define("markdown", ["md"], function(md){return(
md`
# WaterClusterDB

*Kristina Herman and Joseph Heindel, CSE512 Final Project*

### Background on Water Clusters:

A water cluster is a gas-phase aggregate of water molecules. Water clusters are commonly studied by physical chemists both experimentally and theoretically due to their rich physics, while still being relatively simple compared to liquid water or the various phases of ice. Furthermore, water clusters are relevant in atmospheric physics where they form the building blocks of more complex aerosols which can facilitate chemical reactions or absorb infrared radiation.

For these reasons and many others, water clusters are very commonly studied by theoretical chemists. Before any theoretical study can begin, one must select a structure. These structures take the form a collection of xyz coordinates describing the position of atoms in 3-D space.

In order to make it easier to explore the vast number of configurations and sizes which water clusters adopt, we have created and published a database consisting of over 5,000,000 water cluster geometries (sites.uw.edu/wdbase/database-of-water-clusters). A large number of these are relatively high in energy and therefore not liekly to occur naturally. For this reason, we have selected a subset of ~200,000 structures, all within 5 kcal/mol of the lowest energy structure of a particular size.

A water cluster stucture can be thought of as a network of water molecules which are all connected by hydrogen bonds. In this sense, a water cluster is a graph, where each node is a water molecule and each edge is a hydrogen bond connecting two water molecules. Due the vast number of these graphs which could exist, and which appear in this database, we would like to make it easier for researchers to select the type of structure they are interested in without having to manually inspect the structure (through 3D visualization) or download the whole database and write their own scripts to parse out the small number of clusters they actually want to use.

### Motivation for Parallel Coordinates Plot:
The database of water clusters we are working with is very large and is intended to be used as a place where researchers can select water cluster structures for their own research. Currently, the only way for researchers to choose structures is to either download the entire database of ~5,000,000 structures or to download individual text files which have been filtered based on the energy of each cluster (see: sites.uw.edu/wdbase/database-of-water-clusters). However, a researcher may want to study only structures that have certain interesting features. For instance, we have already been contacted by someone who wanted all of the structures which contain molecules that accept three hydrogen bonds (see below for more info). In order to facilitate this request, we had to manually filter out thousands of the many millions of structures in the whole database which fit this person's request. This is just one example of many specific subsets of the whole dataset which an individual user might be intersted in.

A parallel coordinates plot enables us to describe each water cluster with a collection of variables which we know are interesting to other researchers. Furthermore, since a parallel coordinates plot essentially essentially allows for interactive querying, we can allow the user to download the full xyz coordinates of all of the clusters based on the selection they have made. Additionally, someone using the tool might uncover some particularly interesting correlations by playing around with the variables we provide. They can then download this selection and carry out their own analyses offline.

### Features Defining a Water Cluster Structure:
**Energy:**
The energy of a water cluster is a single number which describes the overall stability of a water cluster. Nature tends towards low energy states, so the lower the energy of a cluster, roughly speaking, the more likely it is to occur naturally.

**Hydrogen Bonds:**
A hydrogen bond is a strong intermolecular interaction between an electronegative atom (such as oxygen) and a hydrogen atom. Because each water molecule can donate at most two hydrogen bonds, a fully connected water cluster network will have 2N hydrogen bonds. Some simple measures of the connectedness of a water cluster network are, the *number of hdyrogen bonds*, the *number of free OHs* (meaning a hydrogen atom which does not participate in a hydrogen bond), and the *hydrogen bond saturation* (number of hdyrogen bonds divided by 2N).

**Bonding Arrangement:**
One interesting feature of water clusters is the vast space of structures which can be formed. Due to the emergent structural complexity of water clusters, it is common to focus on simpler elements of the structure like the number of hydrogen bonds each water molecule donates and accepts. This allows us to uniquely classify each water molecule. For instance, a molecule which donates two hydrogen bonds and accepts one hydrogen bond would be labeled as ADD. Similarly, a molecule which accepts three hydrogen bonds (a relatively uncommon situation) and donates two would be called AAADD.

For each of the ~200,000 structures used to make this visualization, we have counted the number of each type of label occuring in a cluster, and allow users to filter by these labels.

**Rings:**
The structure of a molecule is often described in terms of the type of rings which appear in the molecule (e.g. 4-membered vs 5-membered rings). Because of this, chemists tend to intuitively associate certain sizes of rings with the stability of the structure. Additionally, ice is a solid consisting of a lattice of 6-membered rings. Additionally, water clusters are often described as being "ice-like", meaning the structure consists of many fused rings, or "liquid-like", meaning there is no obvious order to the structure, and the cluster tends to be more spherical.

We have enumerated the number of 3-, 4-, 5-, and 6-membered rings appearing in each water cluster and allows the user to filter according to the number of each size of ring appearing in a cluster.

---

All of the above-mentioned water cluster features can be swapped in and out of the parallel coordinates plot via check-boxes. This allows users to focus on the variables and correlations they find particularly interesting. Users can then select the clusters that seem interesting to them and download for their own use. This allows for something as simple as downloading all clusters of a particular size, or downloading some complex query chosen by this particular user.

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### How To:
- To filter some lines on the parallel coordinates plot, click and drag along any axis
- Move an existing filter by clicking and dragging
- Resize an existing filter by clicking on the top or bottom edges and dragging
- You may have as many filters as you want, one per axis
- To remove a filter, click on the axis outside of the selected area
- Add or remove axes from the plot using the check boxes for each pre-computed variable
- Change the variable which is used to color-code each line with the drop down menu
- Download all of the selected data by pressing the "Download Selection" button
`
)});
  main.variable(observer("viewof var_select")).define("viewof var_select", ["Checkbox","longNames"], function(Checkbox,longNames){return(
Checkbox(["NumWaters", "NumHBonds", "NumFreeOH", "ThreeCycles", "FourCycles", "FiveCycles", "SixCycles", "Energy", "HBondSaturation", "ADD", "AAAD", "AD", "AAD", "AAADD", "AADD"], {label: "Select coordinates to display:", value: ["NumWaters", "FourCycles", "FiveCycles", "AADD", "HBondSaturation"], format: d => longNames.get(d)})
)});
  main.variable(observer("var_select")).define("var_select", ["Generators", "viewof var_select"], (G, _) => G.input(_));
  main.variable(observer("viewof color_select")).define("viewof color_select", ["Select","longNames"], function(Select,longNames){return(
Select(["NumWaters", "NumHBonds", "NumFreeOH", "ThreeCycles", "FourCycles", "FiveCycles", "SixCycles", "Energy", "HBondSaturation", "ADD", "AAAD", "AD", "AAD", "AAADD", "AADD"], {label: "Select variable to color encode:", value: "Energy", format: d=> longNames.get(d)})
)});
  main.variable(observer("color_select")).define("color_select", ["Generators", "viewof color_select"], (G, _) => G.input(_));
  main.variable(observer("legend")).define("legend", ["Legend","color","longNames","color_select"], function(Legend,color,longNames,color_select){return(
Legend({color: color, title: longNames.get(color_select)})
)});
  main.variable(observer("plcoord")).define("plcoord", ["d3","width","margin","height","wc_data","color","color_select","line","var_select","wc_data_full","y","hiddenColor","binMap_gen","mutable selected_indices","mutable selected_data","x","x_bin_gen","y_bin_gen","bandwidthMap","longNames"], function(d3,width,margin,height,wc_data,color,color_select,line,var_select,wc_data_full,y,hiddenColor,binMap_gen,$0,$1,x,x_bin_gen,y_bin_gen,bandwidthMap,longNames)
{
  var container = d3.select("body").append("div")
    .attr("class", "parcoords")
    .style("width", width + margin.left + margin.right + "px")
    .style("height", height + margin.top + margin.bottom + "px");
  
  const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);  // create svg container element
  
  let activeBrushes = new Map(); //Make map to "store" current brush selections

  const drawline = svg.append("g")
    .attr("fill", "none")  // box fill
    .attr("stroke-width", 0.3)  // line thickness
    .attr("stroke-opacity", 1) // line opacity
  .selectAll("path")
  .data(wc_data)
  .join("path")
    .transition()
      .delay(function(d, i) { return d3.randomUniform(wc_data.length + 1)()*1+100; }) //gradually draw the lines in
    .attr("stroke", d => color(d[color_select]))  // color encode lines according to variable chosen in drop down
    .attr("d", d => line(d3.cross(var_select, [d], (key, d) => [key, d[key]])));

  var data = wc_data_full
  
  function brushed({selection}, key) {
    if (selection === null) activeBrushes.delete(key);
    else activeBrushes.set(key, selection.map(y.get(key).invert));  // Add brush to map (key: selection range)
    const selected = [];
    drawline.each(function(d) {  // Determine whether each line is "active" (in the range of the selected y-values)
      const active = Array.from(activeBrushes).every(([key, [max, min]]) => d[key] >= min && d[key] <= max);
      d3.select(this)
        .attr("stroke", active ? color(d[color_select]) : hiddenColor);  //change stroke color to gray if not active
      if (active) {
        d3.select(this).raise();
        selected.push(d);
      }
    });
    //svg.property("value", selected).dispatch("input");
    
    //filter wc_data based on selection and then re-bin and draw the rectangles
    var filterReturn = filterData(wc_data_full)
    var indices = filterReturn[1]
    var filterData = filterReturn[0]
    function filterData(val) {
      const dataList = [];
      const indexList = [];
      for (var i = 0; i < val.length; i++) { //loop over all entries
        const active = Array.from(activeBrushes).every(([key, [max, min]]) => data[i][key] >= min && data[i][key] <= max);
          if (active) {
            dataList.push(data[i]);
            indexList.push(i);
          };};
        return [dataList, indexList];
    };
    title.text(filterData.length + " water clusters selected");
    
    for (var i = 0; i < var_select.length; i++) {  //loop over each variable to remove old histograms
      var element = document.getElementById("#histogram");
      element.parentNode.removeChild(element);}
    var binMap2 = binMap_gen(filterData, var_select);
    for (var i = 0; i < var_select.length; i++) { //loop over each variable to draw new histograms
    histo(var_select[i], binMap2); };
    
    $0.value = indices;
    $1.value = filterData;
  };
  
  
  const brush = d3.brushY()  // Y-brush to select portion of axis with thickness brushWidth
    .extent([[-7.5, margin.bottom], [7.5, height-margin.top]])
    .on("end", brushed);

  var binMap = binMap_gen(wc_data_full, var_select)  //redefine in function brushed based on selection
  
  var histo = function(feature, bins) { //function that takes in a feature/key and draws the histogram on that axis
    svg.append("g")
      .attr("id", "#histogram")
      .attr("class", "#histogram")
      .attr("fill", "black")
      .attr("fill-opacity", 0.3)
      .attr("stroke", "black")
    .selectAll("rect")
    .data(bins.get(feature))
    .join("rect")
    .attr("x", x(feature))
    .attr("width", d => x_bin_gen(feature, bins)(d.length) - x_bin_gen(feature, bins)(0))
    .attr("y", d => y_bin_gen(feature, bins)(d.x0)-bandwidthMap(bins).get(feature))
    .attr("height", bandwidthMap(bins).get(feature));
  };

  for (var i = 0; i < var_select.length; i++) {
    histo(var_select[i], binMap);
  };  //loop over all axes selected and draw the histograms
  
  const axes = svg.append("g")
    .selectAll("g")
    .data(var_select)
    .join("g")
    .attr("transform", d => `translate(${x(d)},0)`)
    .each(function(d) { d3.select(this).call(d3.axisLeft(y.get(d))); })
    .attr("font-weight", "bold")
    .attr("font-size", "11px")
    .call(g => g.append("text") //add in axis labels to the bottom of the axis
        .attr("x", -50)
        .attr("y", 10)
        .attr("text-anchor", "start")
        .attr("fill", "currentColor")
        .attr("font-size", "11px")
        .attr('font-family', 'Helvetica Neue, Arial')
        .text(d => longNames.get(d)))
    .call(g => g.selectAll("text")  // add tick labels and make contrasted border for labels
        .clone(true).lower()
        .attr("stroke-width", 3)
        .attr("stroke-linejoin", "round")
        .attr("stroke", "white"))
    .call(brush);
  
  const count = wc_data_full.length;  //total number of water clusters in dataset
  
  const title = svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", height-10)
        .attr("text-anchor", "middle")
        .attr("fill", "currentColor")
        .attr("color", "red")
        .style("font-size", "24px")
        .attr('font-family', 'Helvetica Neue, Arial')
        .text(count + " water clusters selected");
  
  return svg.node();
}
);
  main.variable(observer()).define(["DOM","serialize","selected_data"], function(DOM,serialize,selected_data){return(
DOM.download(serialize(selected_data), "cluster_db_selection.csv", "Download Selection")
)});
  main.variable(observer()).define(["download_button"], function(download_button){return(
download_button()
)});
  main.variable(observer("bar")).define("bar", ["progress"], function(progress){return(
progress({interval: 50})
)});
  main.variable(observer("download_button")).define("download_button", ["bar","downloading_data","DOM","set_download_state"], function(bar,downloading_data,DOM,set_download_state){return(
function download_button() {
  bar.progress(downloading_data.num_downloaded, downloading_data.num_clusters_at_start);
  return DOM.download(set_download_state, "cluster_db_selection.xyz", "Download XYZ of Selected"); 
}
)});
  main.variable(observer("download_button_ui")).define("download_button_ui", ["download_button"], function(download_button){return(
setInterval(download_button, 100)
)});
  main.variable(observer("downloading_data")).define("downloading_data", function()
{
  return {
          'output_string' : [],
          'downloading' : false,
          'copy_of_indices' : [],
          'num_files_to_download' : 1,
          'num_clusters_at_start' : 1,
          'num_downloaded' : 0
         };
}
);
  main.variable(observer("set_download_state")).define("set_download_state", ["downloading_data","selected_indices"], function(downloading_data,selected_indices){return(
function set_download_state() {
  // returns a copy of the selected indices (so they don't change while we download) and a bool
  // to show we are currently downloading
  downloading_data.output_string = [];
  downloading_data.downloading = true;
  downloading_data.copy_of_indices = [...selected_indices];
  downloading_data.copy_of_indices.length > 100000 ? downloading_data.num_files_to_download = 2 :             downloading_data.num_files_to_download = 1;
  downloading_data.num_clusters_at_start = selected_indices.length;
  downloading_data.num_downloaded = 0;
}
)});
  main.variable(observer()).define(["incrementally_download_xyz"], function(incrementally_download_xyz){return(
setInterval(incrementally_download_xyz, 1000)
)});
  main.variable(observer("incrementally_download_xyz")).define("incrementally_download_xyz", ["downloading_data","form_output_xyz_string","start_blob_download"], function(downloading_data,form_output_xyz_string,start_blob_download){return(
function incrementally_download_xyz()
{
    if (downloading_data.downloading == true) {
      var startTime = Date.now();
      while ((Date.now() - startTime) < 100) {
        downloading_data.output_string.push(form_output_xyz_string(downloading_data.copy_of_indices.splice(0, 500)));
 downloading_data.num_downloaded += 500;
    }
    }
  if (downloading_data.copy_of_indices.length == 0 && downloading_data.downloading == true) {
    let download_blob_1;
    let download_blob_2;
    if (downloading_data.num_files_to_download == 1) {
      download_blob_1 = new Blob([downloading_data.output_string.join()], {type: "text"});
     start_blob_download(download_blob_1, "cluster_db_selection.xyz");
    } else {
      download_blob_1 = new Blob([downloading_data.output_string.splice(0, downloading_data.output_string.length / 2).join()], {type: "text"});
      download_blob_2 = new Blob([downloading_data.output_string.join()], {type: "text"}); 
      // download the first blob
      start_blob_download(download_blob_1, "cluster_db_selection_part1.xyz");
      // download the second blob
      start_blob_download(download_blob_2, "cluster_db_selection_part2.xyz");
    }
    // reset state
    downloading_data.downloading = false;
    downloading_data.output_string = [];
    downloading_data.num_clusters_at_start = 1;
    downloading_data.num_downloaded = 0;
    clearInterval();
  }
}
)});
  main.variable(observer("start_blob_download")).define("start_blob_download", function(){return(
function start_blob_download(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0)
  }
}
)});
  main.variable(observer("progress")).define("progress", ["html","Inspector","Promises"], function(html,Inspector,Promises){return(
function progress(options) {
  const gradient = (color, t) => `linear-gradient(90deg, ${color} ${t*100}%, rgba(0,0,0,0) ${t*100+.001}%)`;
  const bar     = html`<div style="padding:5px;width:100%">`;
  const wrapper = html`<div>${bar}`;
  const inspector = new Inspector(wrapper);
  const {color = '#ccc', interval = 0, invalidation} = options;

  let cbResolve, cbReject, invalidated = false;
  wrapper.value = new Promise((resolve, reject) => {
    cbResolve = resolve;
    cbReject  = reject;
  });
  if(invalidation) invalidation.then(() => { invalidated = true });
  wrapper.value.then(v => inspector.fulfilled(v));
  
  let last = 0;
  wrapper.progress = (current, max, ratio = true) => {
    if(invalidated) return Promises.reject();
    if (current > 0) {
      bar.textContent = `Preparing file for download...`;
    } else {
      bar.textContent = ``;
    }
    bar.style.backgroundImage = gradient(color, current / max); 
    if(Date.now() - last <= interval) return Promise.resolve();
    last = Date.now();
    return Promises.delay(0);
  };
  wrapper.resolve = cbResolve;
  
  return wrapper;
}
)});
  main.variable(observer("Inspector")).define("Inspector", ["require"], async function(require){return(
(await require('@observablehq/notebook-inspector@1.1.1/dist/notebook-inspector.umd.js')).Inspector
)});
  main.define("initial selected_data", ["wc_data_full"], function(wc_data_full){return(
wc_data_full
)});
  main.variable(observer("mutable selected_data")).define("mutable selected_data", ["Mutable", "initial selected_data"], (M, _) => new M(_));
  main.variable(observer("selected_data")).define("selected_data", ["mutable selected_data"], _ => _.generator);
  main.define("initial selected_indices", ["wc_data_full"], function(wc_data_full){return(
Array.from(Array(wc_data_full.length).keys())
)});
  main.variable(observer("mutable selected_indices")).define("mutable selected_indices", ["Mutable", "initial selected_indices"], (M, _) => new M(_));
  main.variable(observer("selected_indices")).define("selected_indices", ["mutable selected_indices"], _ => _.generator);
  main.variable(observer("bandwidthMap")).define("bandwidthMap", function(){return(
function bandwidthMap(bins) {
  return new Map(
Object.entries({
    NumWaters: 530/31, //(height - margin.bottom - margin.top)/(bins.get("NumWaters").length),
    NumHBonds: 530/56, //(height - margin.bottom - margin.top)/(bins.get("NumHBonds").length),
    NumFreeOH: 530/60, //(height - margin.bottom - margin.top)/(bins.get("NumFreeOH").length),
    ThreeCycles: 530/30, //(height - margin.bottom - margin.top)/(bins.get("ThreeCycles").length),
    FourCycles: 530/42, //(height - margin.bottom - margin.top)/(bins.get("FourCycles").length),
    FiveCycles: 530/33, //(height - margin.bottom - margin.top)/(bins.get("FiveCycles").length),
    SixCycles: 530/31, //(height - margin.bottom - margin.top)/(bins.get("SixCycles").length),
    Energy: 530/35, //(height - margin.bottom - margin.top)/(bins.get("Energy").length),
    HBondSaturation: 530/45, //(height - margin.bottom - margin.top)/(bins.get("HBondSaturation").length),
    ADD: 530/55, //(height - margin.bottom - margin.top)/(bins.get("ADD").length),
    AAAD: 530/50, //(height - margin.bottom - margin.top)/(bins.get("AAAD").length),
    AD: 530/50, //(height - margin.bottom - margin.top)/(bins.get("AD").length),
    AAD: 530/50, //(height - margin.bottom - margin.top)/(bins.get("AAD").length),
    AAADD: 530/50, //(height - margin.bottom - margin.top)/(bins.get("AAADD").length),
    AADD: 530/33 //(height - margin.bottom - margin.top)/(bins.get("AADD").length)
})
)
}
)});
  main.variable(observer("bin_gen")).define("bin_gen", ["d3"], function(d3){return(
d3.bin()
  .thresholds(40)
)});
  main.variable(observer("x_bin_gen")).define("x_bin_gen", ["d3","margin"], function(d3,margin){return(
function(features, bins) {
  return d3.scaleLinear()
    .domain([0, d3.max(bins.get(features), d => d.length)]).nice()
    .range([margin.left, margin.left+30])
}
)});
  main.variable(observer("y_bin_gen")).define("y_bin_gen", ["d3","height","margin"], function(d3,height,margin){return(
function(features, bins) {
  return d3.scaleLinear()
    .domain([bins.get(features)[0].x0, bins.get(features)[bins.get(features).length -1].x1])
    .range([height - margin.top, margin.bottom])
}
)});
  main.variable(observer("binMap_gen")).define("binMap_gen", ["arrayAll","bin_gen"], function(arrayAll,bin_gen){return(
function binMap_gen(data, selectVar) {
  var sampled_data = arrayAll(data, selectVar)
  var binMap = new Map();
  for (var i = 0; i < selectVar.length; i++) {
    if (selectVar[i] == "NumWaters") {
      binMap.set("NumWaters", bin_gen.domain([0, 31])(sampled_data[i]))};
    if (selectVar[i] == "NumHBonds") {
      binMap.set("NumHBonds", bin_gen.domain([0, 56])(sampled_data[i]))};
    if (selectVar[i] == "NumFreeOH") {
      binMap.set("NumFreeOH", bin_gen.domain([0, 12])(sampled_data[i]))};
    if (selectVar[i] == "ThreeCycles") {
      binMap.set("ThreeCycles", bin_gen.domain([0, 3])(sampled_data[i]))};
    if (selectVar[i] == "FourCycles") {
      binMap.set("FourCycles", bin_gen.domain([0, 21])(sampled_data[i]))};
    if (selectVar[i] == "FiveCycles") {
      binMap.set("FiveCycles", bin_gen.domain([0, 33])(sampled_data[i]))};
    if (selectVar[i] == "SixCycles") {
      binMap.set("SixCycles", bin_gen.domain([0, 31])(sampled_data[i]))};
    if (selectVar[i] == "Energy") {
      binMap.set("Energy", bin_gen.domain([-350, 0])(sampled_data[i]))};
    if (selectVar[i] == "HBondSaturation") {
      binMap.set("HBondSaturation", bin_gen.domain([0.5, 0.95])(sampled_data[i]))};
    if (selectVar[i] == "ADD") {
      binMap.set("ADD", bin_gen.domain([0, 0.55])(sampled_data[i]))};
    if (selectVar[i] == "AAAD") {
      binMap.set("AAAD", bin_gen.domain([0, 0.1])(sampled_data[i]))};
    if (selectVar[i] == "AD") {
      binMap.set("AD", bin_gen.domain([0, 1.0])(sampled_data[i]))};
    if (selectVar[i] == "AAD") {
      binMap.set("AAD", bin_gen.domain([0, 0.5])(sampled_data[i]))};
    if (selectVar[i] == "AAADD") {
      binMap.set("AAADD", bin_gen.domain([0, 0.1])(sampled_data[i]))};
    if (selectVar[i] == "AADD") {
      binMap.set("AADD", bin_gen.domain([0., 0.65])(sampled_data[i]))};
  };
return binMap
//) //map of variable names to generated bins
}
)});
  main.variable(observer("arrayAll")).define("arrayAll", function(){return(
function arrayAll(data, selectVar) {
  var bigList = [];
  for (var j = 0; j < selectVar.length; j++) {
    const key = selectVar[j]
    var keyList = [];
    for (var i = 0; i < data.length; i++) { keyList.push(data[i][key]);}
    bigList.push(keyList);
  }
  return bigList;
}
)});
  main.variable(observer("sampleData")).define("sampleData", ["keys"], function(keys){return(
function sampleData(data) {
  var bigList = [];
  for (var j = 0; j < keys.length; j++) {
    const key = keys[j]
    var test_list = [];
    test_list.push(data[0][key]);
    bigList.push(test_list);
  }
  return bigList;
}
)});
  main.variable(observer("hiddenColor")).define("hiddenColor", function(){return(
"#ebecf0"
)});
  main.variable(observer("longNames")).define("longNames", function(){return(
new Map(
  Object.entries({
    NumWaters: "Number of molecules",
    NumHBonds: "Number of H Bonds",
    NumFreeOH: "Number of Free OH",
    ThreeCycles: "Number of 3 cycles",
    FourCycles: "Number of 4 cycles",
    FiveCycles: "Number of 5 cycles",
    SixCycles: "Number of 6 cycles",
    Energy: "Binding energy (kcal/mol)",
    HBondSaturation: "H Bond Saturation",
    ADD: "% of ADD waters",
    AAAD: "% of AAAD waters",
    A: "% of A waters",
    D: "% of D waters",
    AA: "% of AA waters",
    AAAADD: "% of AAAADD waters",
    AD: "% of AD waters",
    AAD: "% of AAD waters",
    AAA: "% of AAA waters",
    None: "% of Misc. waters",
    AAADD: "% of AAADD waters",
    AADD: "% of AADD waters",
    DD: "% of DD waters",
    AAAAD: "% of AAAAD waters"
  })
)
)});
  main.variable(observer("line")).define("line", ["d3","y","x"], function(d3,y,x){return(
d3.line()
    .defined(([, value]) => value != null)
    .y(([key, value]) => y.get(key)(value))
    .x(([key]) => x(key))
)});
  main.variable(observer("y")).define("y", ["d3","height","margin"], function(d3,height,margin){return(
new Map(
  Object.entries({
    NumWaters: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 30]),
    NumHBonds: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 55]),
    NumFreeOH: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 11]),
    ThreeCycles: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 3]),
    FourCycles: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 20]),
    FiveCycles: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 32]),
    SixCycles: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 30]),
    Energy: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([-350, 0]),
    HBondSaturation: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0.5, 0.95]),
    ADD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 0.55]),
    AAAD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 0.1]),
    AD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 1.0]),
    AAD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 0.5]),
    AAADD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0, 0.1]),
    AADD: d3.scaleLinear().range([height - margin.top, margin.bottom]).domain([0., 0.65])
}))
)});
  main.variable(observer("x")).define("x", ["d3","var_select","margin","width"], function(d3,var_select,margin,width){return(
d3.scalePoint(var_select, [margin.left, width - margin.right])
)});
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("wc_data_full")).define("wc_data_full", ["d3Fetch"], function(d3Fetch){return(
d3Fetch.csv("https://raw.githubusercontent.com/heindelj/Water_Cluster_Database/main/data/cluster_database_statistics_5kcal.csv")
)});
  main.variable(observer("wc_data")).define("wc_data", ["d3Fetch"], function(d3Fetch){return(
d3Fetch.csv("https://raw.githubusercontent.com/heindelj/Water_Cluster_Database/main/data/cluster_database_statistics_low_energy.csv")
)});
  main.variable(observer("wc_xyz_1")).define("wc_xyz_1", ["npyjs"], function(npyjs){return(
fetch(
"https://rawcdn.githack.com/heindelj/Water_Cluster_Database/247e3d82b8a9a9c5915578251b94f41ce5b7af6c/data/W3_W30_geoms_binary_first_100k.npy"
).then(d => d.arrayBuffer())
 .then(d => new npyjs().parse(d))
)});
  main.variable(observer("wc_xyz_2")).define("wc_xyz_2", ["npyjs"], function(npyjs){return(
fetch(
"https://rawcdn.githack.com/heindelj/Water_Cluster_Database/247e3d82b8a9a9c5915578251b94f41ce5b7af6c/data/W3_W30_geoms_binary_second_100k.npy"
).then(d => d.arrayBuffer())
 .then(d => new npyjs().parse(d))
)});
  main.variable(observer("cluster_indices")).define("cluster_indices", ["npyjs"], function(npyjs){return(
fetch(
"https://rawcdn.githack.com/heindelj/Water_Cluster_Database/89a3530fa816a2a459eceb63cbcfaab08150617e/data/cluster_lengths.npy"
)
  .then(d => d.arrayBuffer())
  .then(d => new npyjs().parse(d))
)});
  main.variable(observer("wc_xyz")).define("wc_xyz", ["wc_xyz_1","wc_xyz_2"], function(wc_xyz_1,wc_xyz_2){return(
new Float32Array(wc_xyz_1.data.length + wc_xyz_2.data.length)
)});
  main.variable(observer("workerSource")).define("workerSource", function(){return(
`
onmessage = function(e) {
    // the passed-in data is available via e.data
  var all_cluster_geoms = [];
  cluster_indices = e.data[0];
  wc_xyz = e.data[1];
    // loop throgh all structures and form the array of multidimensional arrays
    var startIndex = 0;
    for (var i = 0; i < cluster_indices.length; i++) {
      var new_geom = [];
      const geom = Array.from(wc_xyz.slice(startIndex, 3 * cluster_indices[i] + startIndex));
      startIndex += 3 * cluster_indices[i];
      while(geom.length) new_geom.push(geom.splice(0,3));
      all_cluster_geoms.push(new_geom);
    }

   postMessage(all_cluster_geoms);

  close();
}
`
)});
  main.variable(observer("script")).define("script", ["workerSource","invalidation"], function(workerSource,invalidation)
{
  const blob = new Blob([workerSource], {type: "text/javascript"});
  const script = URL.createObjectURL(blob);
  invalidation.then(() => URL.revokeObjectURL(script));
  return script;
}
);
  main.variable(observer("geoms")).define("geoms", ["Generators","wc_xyz","wc_xyz_1","wc_xyz_2","script","cluster_indices"], function(Generators,wc_xyz,wc_xyz_1,wc_xyz_2,script,cluster_indices){return(
Generators.observe(notify => {
  wc_xyz.set(wc_xyz_1.data);
  wc_xyz.set(wc_xyz_2.data, wc_xyz_1.data.length);
  const worker = new Worker(script);
  worker.postMessage([cluster_indices.data, wc_xyz]);
  worker.addEventListener("message", ({data}) => notify(data));
  return () => {
    worker.terminate();
    };
})
)});
  main.variable(observer("form_output_xyz_string")).define("form_output_xyz_string", ["geoms","wc_data_full"], function(geoms,wc_data_full){return(
function form_output_xyz_string(indices) {
  let output_string = [];
  let atom_labels = ["O ", "H ", "H "];
  for (var i = 0; i < indices.length; i++) {
    output_string.push(geoms[indices[i]].length);
    output_string.push("\n");
    output_string.push(wc_data_full[indices[i]].Energy);
    output_string.push("\n");
    for (var j = 0; j < geoms[indices[i]].length; j++) {
      output_string.push(atom_labels[j % 3]);
      output_string.push(geoms[indices[i]][j].join(' '));
      output_string.push('\n');
    }
  }
  return output_string.join(' ');
}
)});
  main.variable(observer("button")).define("button", ["DOM"], function(DOM){return(
(data, filename = 'water_cluster_db_selection.xyz') => {
  if (!data) throw new Error('Array of data required as first argument');

  let downloadData;
    downloadData = new Blob(data, {
      type: "text/plain"
    });

  const size = (downloadData.size / 1024 / 1024).toFixed(0);
  const button = DOM.download(
    downloadData,
    filename,
    `Download XYZ (~${size} MB)`
  );
  return button;
}
)});
  main.variable(observer("keys")).define("keys", ["wc_data"], function(wc_data){return(
wc_data.columns.slice(0)
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 50, bottom: 20, left: 50, right: 52}
)});
  main.variable(observer("color")).define("color", ["d3","y","color_select"], function(d3,y,color_select){return(
d3.scaleSequential(y.get(color_select).domain(), t => d3.interpolateRdYlBu(1-t))
)});
  const child1 = runtime.module(define1);
  main.import("legend", "Legend", child1);
  const child2 = runtime.module(define2);
  main.import("Button", child2);
  main.import("Checkbox", child2);
  main.import("Toggle", child2);
  main.import("Radio", child2);
  main.import("Range", child2);
  main.import("Select", child2);
  main.import("Text", child2);
  main.import("Textarea", child2);
  main.import("Search", child2);
  main.import("Table", child2);
  const child3 = runtime.module(define3);
  main.import("serialize", child3);
  const child4 = runtime.module(define4);
  main.import("printTable", child4);
  main.import("mdTable", child4);
  const child5 = runtime.module(define5);
  main.import("npyjs", child5);
  main.variable(observer("json2csv")).define("json2csv", ["require"], function(require){return(
require("json2csv")
)});
  const child6 = runtime.module(define6);
  main.variable(observer("d3Fetch")).define("d3Fetch", ["require"], function(require){return(
require('d3-fetch')
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  return main;
}
