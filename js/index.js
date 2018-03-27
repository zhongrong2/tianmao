src="jquery-3.3.1.min.js";
{
    let item=$(".newFloor-grid2")
    let obj=item[0]
    $(".newFloor-grid2").forEach(function(index){
        $(".newFloor-grid2").mouseenter=function(){
            $(".newFloor-grid2").remove("newFloor-grid2-active");
            obj=item[index];
            item.addClass("newFloor-grid2-active");
        }
    });

}