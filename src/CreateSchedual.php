<?php
    include 'DBconnection.php';


    $sql = "SELECT course_code, name, type, location, credits, start_time, end_time, g_nom,day
    FROM courses 
    ORDER BY day ,start_time ,name DESC,credits";

    $sql2 = "SELECT day,MAX(end_time) as 'end' FROM courses GROUP BY day";
    
    $result = $conn->query($sql);
    $result2 = $conn->query($sql2);
    // Prepare an associative array to hold schedules for each day
    $schedules = [
        "Sunday" =>["Courses"=>[], "endtime"=>[]] ,
        "Monday" =>["Courses"=>[], "endtime"=>[]],
        "Tuesday" =>["Courses"=>[], "endtime"=>[]],
        "Wednesday" =>["Courses"=>[], "endtime"=>[]],
        "Thursday" =>["Courses"=>[], "endtime"=>[]]
    ];
    
    // Distribute data into corresponding day arrays
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $day = $row['day'];
            if (array_key_exists($day, $schedules)) {
                $schedules[$day]["Courses"][] = $row;
            }
        }
    }
    if ($result2->num_rows > 0) {
        while ($row = $result2->fetch_assoc()) {
            $day = $row['day'];
            if (array_key_exists($day, $schedules)) {
                $schedules[$day]["endtime"][] = (substr($row['end'],0,2)-'7');
            }
        }
    }

    $jsonData = json_encode($schedules, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

    // Specify the path to the JSON file
    $jsonFile = '../js/scheduale.json';

    // Write the JSON data to the file
    if (file_put_contents($jsonFile, $jsonData)) {
        echo "JSON file has been updated successfully.";
    } else {
        echo "Failed to update JSON file.";
    }

    $conn->close();
?>