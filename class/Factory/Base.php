<?php

namespace counseling\Factory;

/**
 * @license http://opensource.org/licenses/lgpl-3.0.html
 * @author Matthew McNaney <mcnaney at gmail dot com>
 */
class Base extends \ResourceFactory
{

    public static function pullPostString($varname)
    {
        return trim(strip_tags(filter_input(INPUT_POST, $varname, FILTER_SANITIZE_STRING)));
    }

    public static function pullPostCheck($varname)
    {
        return filter_input(INPUT_POST, $varname, FILTER_VALIDATE_BOOLEAN);
    }

}